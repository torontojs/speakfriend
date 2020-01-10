import React from 'react'
import styled from 'styled-components'
import { Button as UnstiledButton } from 'rebass'
import theme from '../theme'

const StyledButton = props => {
  let Button = styled(UnstiledButton)`
    &:hover {
      color: ${theme.colors.greyLight2};
      border-color: ${theme.colors.greyLight};
    `
  return <Button variant="outline">{props.text}</Button>
}

export default StyledButton
