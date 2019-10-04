import React from 'react'
import Fade from 'react-reveal/Fade'
import { Flex, Box, Text } from 'rebass'
import styled from 'styled-components'
import Nav from './Nav'

let Logo = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.primary};
  letter-spacing: 1.2px;
  height: 100%;
  line-height: 44px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export default () => (
  <Flex justifyContent="spaceBetween">
    <Box p="8px">
      <Fade bottom>
        <Logo>speakfriend</Logo>
      </Fade>
    </Box>
    <Box p="8px" width={1}>
      <Nav />
    </Box>
  </Flex>
)
