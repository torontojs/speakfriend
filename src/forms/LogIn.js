import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import React, { useState, useEffect } from 'react'
import StyledButton from '../components/StyledButton'
import StyledTextInput from '../components/StyledTextInput'

const LogIn = ({ loggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    loggedIn(false)
  }, [])

  const logIn = event => {
    event.prevenDefault()
  }
  return (
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center">
        <Box
          as="form"
          onSubmit={logIn}
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

          <StyledTextInput
            type="text"
            value={password}
            required
            updateValue={setPassword}
            labelText="password"
          />
          <StyledButton text="Log In" />
        </Box>
      </Flex>
    </Fade>
  )
}

export default LogIn
