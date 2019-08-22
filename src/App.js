import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { Box } from 'rebass'
import theme from './theme'
import Header from './Header'
import Nav from './Nav'
import Entity from './Entity'
import SubmitSpeaker from './SubmitSpeaker'


export default () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Nav />
        <Box p="24px">
          <Route path="/speaker/submit" component={SubmitSpeaker} />
          <Route exact path="/:entity" component={Entity} />
         
        </Box>
      </>
    </ThemeProvider>
  </BrowserRouter>
)
