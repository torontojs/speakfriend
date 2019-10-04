import React from 'react'
import Fade from 'react-reveal/Fade'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { Route, Link as UnstyledLink, NavLink } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

let Link = styled(NavLink)`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  font-weight: 600;
  &:hover,
  &.active {
    text-decoration: underline;
  }
`

let Logout = styled(Link)`
  color: ${props => props.theme.colors.greyDark};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

let Divider = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 1px;
    height: 70%;
    margin: auto 10px;
    background-color: ${props => props.theme.colors.black};
  }
`

let UserProfileIcon = styled(AccountCircleIcon)`
  font-size: 40px;
`

export default () => (
  <Flex justifyContent="flex-end">
    <Box p="8px">
      <Link activeClassName="active" to="/speaker/submit">
        speakers
      </Link>
    </Box>
    <Box p="8px">
      <Link activeClassName="active" to="/talks">
        talks
      </Link>
    </Box>
    <Box p="8px">
      <Link activeClassName="active" to="/events">
        events
      </Link>
    </Box>
    <Box p="8px">
      <Link activeClassName="active" to="/submit">
        submit talk
      </Link>
    </Box>
    <Box p="8px">
      <Logout to="/login">Logout</Logout>
    </Box>
    <Divider />
    <Link to="/user">
      <UserProfileIcon style={{ fontSize: 40 }} />
    </Link>
  </Flex>
)
