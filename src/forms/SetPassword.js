import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import React, { useState, useEffect } from 'react'
import StyledButton from '../components/StyledButton'
import StyledTextInput from '../components/StyledTextInput'

const SetPassword = ({ loggedIn }) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirm] = useState('')

  const submitPassword = event => {
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
          onSubmit={submitPassword}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <StyledTextInput
            type="text"
            value={password}
            required
            updateValue={setPassword}
            labelText="password"
          />
          <StyledTextInput
            type="text"
            value={confirmPassword}
            required
            updateValue={setConfirm}
            labelText="confirm password"
          />
          <StyledButton text="Set Password" />
        </Box>
      </Flex>
    </Fade>
  )
}

export default SetPassword
