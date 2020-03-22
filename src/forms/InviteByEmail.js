import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import React, { useState, useEffect } from 'react'
import StyledButton from '../components/StyledButton'
import StyledTextInput from '../components/StyledTextInput'

const InviteByEmail = ({ loggedIn }) => {
  const [email, setEmail] = useState('')
  const [userExistsError, toggleError] = useState(false)

  const invite = async event => {
    event.preventDefault()

    let data = {
      email: email,
    }

    const response = await fetch('/.netlify/functions/index/invite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status === 200) {
      console.log(response)
    } else {
      console.log('user is alrady invited to speakfriend')
      toggleError(true)
    }
  }

  return (
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        {userExistsError
          ? 'A user by that email has already been invited to Speakfriend'
          : null}
        <Box
          as="form"
          onSubmit={invite}
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop="5%"
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