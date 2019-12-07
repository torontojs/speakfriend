import React from 'react'
import { Flex, Text } from 'rebass'
import StyledButton from '../components/StyledButton'

const Speaker = props => {
  const { speaker, email } = props

  return (
    <Flex mt={4} alignItems="center" justifyContent="space-between">
      <Text fontSize={3} fontWeight="500">
        {`Speaker: ${speaker}`}
      </Text>
      <StyledButton
        text={
          <a
            href={`mailto:${email}`}
            target="_blank"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            request availability
          </a>
        }
      />
    </Flex>
  )
}
export default Speaker
