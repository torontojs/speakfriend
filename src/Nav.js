import React from 'react'
import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { Route, Link as UnstyledLink } from 'react-router-dom'

let Link = styled(UnstyledLink)`
  color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.secondary}
  }
`

export default () => (
  <Flex justifyContent="center">
    <Fade bottom>
      <Box p="8px">
        <Route>
          {({ location }) => (
            <Link className={location.pathname} to="/speakers">
              speakers
            </Link>
          )}
        </Route>
      </Box>
      <Box p="8px">
        <Link to="/talks">talks</Link>
      </Box>
      <Box p="8px">
        <Link to="/events">events</Link>
      </Box>
      <Box p="8px">
        <Link to="/submit/talk">submit talk</Link>
      </Box>
    </Fade>
  </Flex>
)
