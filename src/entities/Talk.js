import React from 'react'
import Speaker from './Speaker'
import { Flex, Box, Text } from 'rebass'
import styled from 'styled-components'
import TopicsPill from '../components/TopicsPill'
import StyledButton from '../components/StyledButton'

let FlexCard = styled(Flex)`
  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: column;
  }
`

export default ({ fields }) => {
  // <>
  //   <h3>{fields['Talk']}</h3>
  //   <p>{fields['Description']}</p>
  //   <Speaker fields={fields} />
  // </>
  const Topics = fields['Topics']
  const Email = fields['Email']
  const Speaker = fields['Speaker']
  const Description = fields['Description']
  const Talk = fields['Talk']

  return (
    <FlexCard alignItems="center" width={'100%'}>
      <Box px={[2, 3]} mt={[3, 0]} alignSelf="stretch" flex="1">
        <Flex py={2} mt={2} alignItems="center">
          <Text fontSize={2} width={1 / 3}>
            Topics:
          </Text>
          <Text fontSize={2} textAlign="right" width={2 / 3}>
            <TopicsPill topics={Topics} />
          </Text>
        </Flex>
        <Flex mt={4} alignItems="center" justifyContent="flex-end">
          <StyledButton
            text={
              <a
                href={`mailto:${Email}`}
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                request availability
              </a>
            }
          />
        </Flex>
        <Text fontSize={3} fontWeight="500" textAlign="left">
          {`Name of speaker: ${Speaker}`}
        </Text>
      </Box>
    </FlexCard>
  )
}
