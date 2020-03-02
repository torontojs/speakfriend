import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import React, { useState, useEffect, useContext } from 'react'
import StyledButton from '../components/StyledButton'
import StyledTextInput from '../components/StyledTextInput'
import { UserContext } from '../context/UserContext'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [loggedIn, toggleLoggedIn] = useContext(UserContext)

  const logIn = async event => {
    event.preventDefault()

    let data = {
      email: email,
    }

    const response = await fetch('/.netlify/functions/index/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status === 200) {
      toggleLoggedIn(true)
    } else {
      console.log('no user found')
    }
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
          <StyledButton text="Send Link" />
        </Box>
      </Flex>
    </Fade>
  )
}

export default LogIn
