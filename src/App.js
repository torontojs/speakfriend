import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Box } from 'rebass'
import theme from './theme'
import Header from './Header'
import Nav from './Nav'
import Entity from './Entity'
import EventForm from './EventForm'
import SpeakerForm from './SpeakerForm';

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Nav />
        <Box p="24px">
          <Route path="/:entity" component={Entity} />
          <Route path="/submittalk" component={SpeakerForm} />
          <Route path="/submitevent" component={EventForm}/>
          <Route/>
        </Box>
      </>
    </ThemeProvider>
  </BrowserRouter>
)
