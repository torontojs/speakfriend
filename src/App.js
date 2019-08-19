import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { Box } from 'rebass'
import theme from './theme'
import Header from './Header'
import Nav from './Nav'
import Entity from './Entity'
import SpeakerForm from './SpeakerForm';

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Nav />
        <Box p="24px">
          <Route path="/:entity" component={Entity} />
          <Route path="/speaker/submit" component={SpeakerForm} />
        </Box>
      </>
    </ThemeProvider>
  </BrowserRouter>
)
