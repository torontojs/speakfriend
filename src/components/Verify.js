import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'

const Verify = props => {
  const Div = styled.div`
    text-align: center;
    margin-top: 10%;
    color: ${props => props.theme.colors.primary};
  `

  const [loggedIn, toggleLoggedIn] = useContext(UserContext)
  const [verifying, toggleVerifying] = useState(true)
  const [expiredJWT, toggleExpired] = useState(false)
  const [invalidJWT, toggleInvalid] = useState(false)

  useEffect(() => {
    fetch(`/.netlify/functions/index/verify${props.location.search}`)
      .then(res => res.json())
      .then(res => {
        let response = res.msg

        toggleVerifying(false)

        response === 'success' ? toggleLoggedIn(true) : toggleLoggedIn(false)
        if (response === 'invalid signature') {
          toggleInvalid(true)
        } else if (response === 'jwt expired') {
          toggleExpired(true)
        }
      })
  }, [])

  return (
    <Div>
      {verifying ? 'Please wait while we verify you!' : null}
      {/* add a link to the login route in the error messages */}
      {expiredJWT
        ? 'Uh oh that link is expired, head to login and resend a new link.'
        : null}
      {invalidJWT
        ? 'Uh oh that link is invalid, head to login to send yourself an access link.'
        : null}
    </Div>
  )
}

export default Verify
