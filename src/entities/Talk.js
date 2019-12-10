import React from 'react'
import Speaker from '../components/Speaker'
import { Flex, Box, Text } from 'rebass'
import styled from 'styled-components'
import TopicsPill from '../components/TopicsPill'

let FlexCard = styled(Flex)`
  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: column;
  }
`

export default ({ fields }) => {
  const topics = fields['Topics']
  const email = fields['Email']
  const name = fields['Speaker']
  const description = fields['Description']
  const talk = fields['Talk']

  return (
    <FlexCard alignItems="center" width={'100%'}>
      <Box px={[2, 3]} mt={[3, 0]} alignSelf="stretch" flex="1">
        <Text fontSize={4} fontWeight="500">
          {`Talk: ${talk}`}
        </Text>
        <Text fontSize={2} fontWeight="200" marginTop="3%">
          {description}
        </Text>
        <Flex py={2} mt={2} alignItems="center" marginTop="3%">
          <Text fontSize={2} width={1 / 3}>
            Topics:
          </Text>
          <Text fontSize={2} textAlign="right" width={2 / 3}>
            <TopicsPill topics={topics} />
          </Text>
        </Flex>
        <Speaker speaker={name} email={email} />
      </Box>
    </FlexCard>
  )
}
