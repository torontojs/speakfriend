import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import React, { useState, useEffect } from 'react'
import StyledButton from '../components/StyledButton'
import StyledTextInput from '../components/StyledTextInput'

const InviteByEmail = ({ loggedIn }) => {
  const [email, setEmail] = useState('')

  const invite = event => {
    event.preventDefault()
  }

  useEffect(() => {
    loggedIn(false)
  }, [])

  return (
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center">
        <Box
          as="form"
          onSubmit={invite}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <StyledTextInput
            type="text"
            value={email}
            updateValue={setEmail}
            labelText="email"
          />
          <StyledButton text="Invite to Speakfriend" />
        </Box>
      </Flex>
    </Fade>
  )
}

export default InviteByEmail
