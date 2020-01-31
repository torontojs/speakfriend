import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { Box } from 'rebass'
import theme from './theme'
import Header from './Header'
import Nav from './Nav'
// import Entity from './Entity'
import EventForm from './forms/EventForm'
import SpeakerForm from './forms/SpeakerForm'

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Nav />
        <Box p="12px">
          <Route path="/submittalk" component={SpeakerForm} />
          <Route path="/submitevent" component={EventForm} />
          {/* <Route exact path="/:entity" component={Entity} /> */}
        </Box>
      </>
    </ThemeProvider>
  </BrowserRouter>
)
