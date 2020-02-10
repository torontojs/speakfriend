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
import SetPassword from './forms/SetPassword'
import SpeakerForm from './forms/SpeakerForm'
import { UserContext } from './context/UserContext'

export default () => {
  const [loggedIn] = useContext(UserContext)

  useEffect(() => {
    if (!loggedIn) {
    }
  })
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <Box p="12px">
            <Header />
            <Nav />
            <Route exact path="/">
              {loggedIn ? (
                <Redirect to="/talks" />
              ) : (
                <Redirect to="/submittalk" />
              )}
            </Route>
            <Route path="/submittalk" component={SpeakerForm} />
            <Route path="/submitevent" component={EventForm} />
            <Route exact path="/:entity" component={Entity} />
            <Route path="/login" component={LogIn} />
            <Route path="/invite" component={InviteByEmail} />
            <Route path="/setpassword" component={SetPassword} />
          </Box>
        </>
      </ThemeProvider>
    </BrowserRouter>
  )
}
