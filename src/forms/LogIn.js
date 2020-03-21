import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import React, { useState, useEffect, useContext } from 'react'
import StyledButton from '../components/StyledButton'
import StyledTextInput from '../components/StyledTextInput'
import { UserContext } from '../context/UserContext'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [noUserError, toggleNoUserError] = useState(false)
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
    }).then(function(res) {
      console.log(res)
      if (res.status === 200) {
        toggleLoggedIn(true)
      } else if (res.status === 404) {
        // okay for now but you need to handle 404 and 500(and others) differently
        toggleNoUserError(true)
        console.log('no user found')
      } else {
        console.log("emailer doesn't work")
      }
    })
  }
  return (
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        {noUserError
          ? 'That email address is not associated to any organizers invited to Speakfriend'
          : null}
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
