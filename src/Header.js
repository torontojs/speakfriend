import React from 'react'
import Fade from 'react-reveal/Fade'
import { Flex, Box, Text } from 'rebass'

export default () => (
  <Flex justifyContent="center">
    <Box p="64px">
      <Fade bottom>
        <Text
          fontSize={['16px', '32px', '64px']}
          fontWeight={700}
          color="#000"
          letterSpacing={1.2}
        >
          speakfriend
        </Text>
      </Fade>
    </Box>
  </Flex>
)
