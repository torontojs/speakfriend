import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import { Box } from 'rebass'
import theme from './theme'
import Header from './Header'
import Nav from './Nav'
import Speakers from './Speakers'

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Nav />
        <Box p="24px">
          <Route exact path="/" component={Speakers} />
          <Route path="/speakers" component={Speakers} />
        </Box>
      </>
    </ThemeProvider>
  </BrowserRouter>
)
