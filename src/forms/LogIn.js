import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import React, { useState, useEffect, useContext } from 'react'
import StyledButton from '../components/StyledButton'
import StyledTextInput from '../components/StyledTextInput'
import { UserContext } from '../context/UserContext'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [noUserError, toggleNoUserError] = useState(false)
  const [emailSuccess, toggleSuccess] = useState(false)
  const [emailFailure, toggleFailure] = useState(false)

  const [loggedIn, toggleLoggedIn] = useContext(UserContext)

  const logIn = async event => {
    event.preventDefault()

    let data = {
      email: email,
    }

    await fetch('/.netlify/functions/index/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(function(res) {
      console.log(res)
      if (res.status === 200) {
        toggleSuccess(true)
        toggleFailure(false)
        toggleNoUserError(false)
      } else if (res.status === 404) {
        toggleNoUserError(true)
        toggleSuccess(false)
        toggleFailure(false)
      } else {
        toggleFailure(true)
        toggleSuccess(false)
        toggleNoUserError(false)
      }
    })
  }
  return (
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        {noUserError
          ? 'That email address is not associated to any organizers invited to Speakfriend'
          : null}
        {emailSuccess
          ? 'Check your inbox, you will shortly receive an email that will log you in to Speakfriend'
          : null}
        {emailFailure ? 'Something went wrong :( try again later.' : null}
        <Box
          as="form"
          onSubmit={logIn}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <StyledTextInput
            type="email"
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
