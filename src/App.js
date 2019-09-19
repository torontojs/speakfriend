import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { Box } from 'rebass'
import theme from './theme'
import Header from './Header'
import Nav from './Nav'
import Entity from './Entity'
import SubmitTalk from './SubmitTalk'


export default () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Nav />
        <Box p="24px">
          <Route path="/submit/talk" component={SubmitTalk} />
          <Route exact path="/:entity" component={Entity} />
         
        </Box>
      </>
    </ThemeProvider>
  </BrowserRouter>
)
