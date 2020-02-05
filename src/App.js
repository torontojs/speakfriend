import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { Box } from 'rebass'
import theme from './theme'
import Header from './Header'
import Nav from './Nav'
import Entity from './Entity'
import LogIn from './forms/LogIn'
import EventForm from './forms/EventForm'
import InviteByEmail from './forms/InviteByEmail'
import SetPassword from './forms/SetPassword'
import SpeakerForm from './forms/SpeakerForm'

export default () => {
  const [loggedIn, toggleLoggedIn] = useState(true)
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <Box p="12px">
            <Header showBlurb={loggedIn} />
            {loggedIn ? <Nav /> : null}
            <Route path="/submittalk" component={SpeakerForm} />
            <Route path="/submitevent" component={EventForm} />
            <Route exact path="/:entity" component={Entity} />
            <Route
              path="/login"
              render={props => <LogIn {...props} loggedIn={toggleLoggedIn} />}
            />
            <Route
              path="/invite"
              render={props => (
                <InviteByEmail {...props} loggedIn={toggleLoggedIn} />
              )}
            />
            <Route
              path="/setpassword"
              render={props => (
                <SetPassword {...props} loggedIn={toggleLoggedIn} />
              )}
            />
          </Box>
        </>
      </ThemeProvider>
    </BrowserRouter>
  )
}
