import { Flex, Box, Text } from 'rebass'
import React from 'react'
import styled from 'styled-components'
import StyledButton from '../components/StyledButton'

let FlexCard = styled(Flex)`
  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: column;
  }
`

export default ({ fields }) => {
  const event = fields['Event']
  const description = fields['Description']
  const email = fields['Email']
  const organization = fields['Organization']
  const date = fields['Date']
  const location = fields['Location']
  return (
    <FlexCard alignItems="center" width={'100%'}>
      <Box px={[2, 3]} mt={[3, 0]} alignSelf="stretch" flex="1">
        <Text fontSize={4} fontWeight="500">
          {`Event: ${event}`}
        </Text>
        <Text fontSize={2} fontWeight="200" marginTop="3%">
          {description}
        </Text>
        <Flex
          py={2}
          mt={2}
          alignItems="center"
          marginTop="3%"
          justifyContent="space-around"
          marginBottom="5%"
        >
          <Text>{`Presented By: ${organization}`}</Text>
          <Text>{date}</Text>
          <Text>{location}</Text>
        </Flex>
        <Flex display="flex" justifyContent="flex-end">
          <StyledButton
            text={
              <a
                href={`mailto:${email}`}
                target="_blank"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                contact organizer
              </a>
            }
          />
        </Flex>
      </Box>
    </FlexCard>
  )
}
