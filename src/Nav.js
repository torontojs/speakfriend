import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { Link as UnstyledLink } from 'react-router-dom'
import { UserContext } from './context/UserContext'

let Link = styled(UnstyledLink)`
  color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

// only show /login and /submittalk in nav for a user not logged in

export default () => {
  const [loggedIn] = useContext(UserContext)
  return (
    <Flex justifyContent="center">
      <Fade bottom>
        <Box p="8px">
          <Link to="/submittalk">submit talk</Link>
        </Box>
        <Box p="8px">{loggedIn ? <Link to="talks">talks</Link> : null}</Box>
        <Box p="8px">{loggedIn ? <Link to="events">events</Link> : null}</Box>
        <Box p="8px">
          {loggedIn ? <Link to="/submitevent">submit an event</Link> : null}
        </Box>
        <Box p="8px">{loggedIn ? <Link to="invite">invite</Link> : null}</Box>
        <Box p="8px">{loggedIn ? null : <Link to="login">login</Link>}</Box>
      </Fade>
    </Flex>
  )
}
