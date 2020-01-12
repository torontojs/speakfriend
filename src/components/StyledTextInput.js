import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

let Input = styled.input`
  font-family: inherit;
  font-size: 20px;
  color: inherit;
  background-color: ${theme.colors.greyLight0};
  border: none;
  padding: 4px 12px 6px 12px;
  border-radius: 15px;
  margin-bottom: 5%;
  width: 250px;
  outline: none;
  &:hover {
    background-color: ${theme.colors.greyLight};
  }

  &::-webkit-input-placeholder {
    font-weight: 400;
    color: ${theme.colors.greyLight2};
  }
  @media screen and (max-width: ${theme.breakpoints[0]}) {
    width: 80%;
    &::-webkit-input-placeholder {
      text-align: center;
    }
  }
`

let Label = styled.label`
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledTextInput = props => {
  const { updateValue, value, labelText, type } = props
  return (
    <Label>
      {labelText}
      <Input
        type={type}
        value={value}
        required
        onChange={e => updateValue(e.target.value)}
      />
    </Label>
  )
}

export default StyledTextInput
