import React from 'react'
import Fade from 'react-reveal/Fade'
import { Flex, Box, Text } from 'rebass'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  padding-bottom: 22px;
  padding-top: 44px;
  width: 100%;
  text-align: center;
  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    padding-bottom: 14px;
    padding-top: 28px;
  }
`

export default () => (
  <Flex justifyContent="center">
    <StyledBox>
      <Fade bottom>
        <Text
          fontSize={['32px', '64px']}
          fontWeight={700}
          color="#000"
          letterSpacing={1.2}
          marginBottom={'15px'}
        >
          speakfriend
        </Text>
      </Fade>
    </StyledBox>
  </Flex>
)
