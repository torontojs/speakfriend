import React, { useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Box } from 'rebass'
import theme from './theme'
import Header from './Header'
import Nav from './Nav'
import Entity from './Entity'
import LogIn from './forms/LogIn'
import EventForm from './forms/EventForm'
import InviteByEmail from './forms/InviteByEmail'
import SpeakerForm from './forms/SpeakerForm'
import { UserContext } from './context/UserContext'
import Verify from './components/Verify'

export default () => {
  const [loggedIn] = useContext(UserContext)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <Box p="12px">
            <Header />
            <Nav />
            <Route path="/submittalk" component={SpeakerForm} />
            {loggedIn ? (
              <>
                <Route exact path="/:entity" component={Entity} />
                <Route path="/invite" component={InviteByEmail} />
                <Route path="/submitevent" component={EventForm} />
              </>
            ) : (
              <>
                <Route path="/login" component={LogIn} />
                <Route path="/verify" component={Verify} />
              </>
            )}
          </Box>
        </>
      </ThemeProvider>
    </BrowserRouter>
  )
}
