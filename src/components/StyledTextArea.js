import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

let TextArea = styled.textarea`
  font-family: inherit;
  font-size: 20px;
  color: inherit;
  background-color: ${theme.colors.greyLight0};
  border: none;
  padding: 4px 12px 6px 12px;
  border-radius: 15px;
  margin-bottom: 5%;
  height: 75px;
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
const StyledTextArea = props => {
  const { updateValue, value, labelText } = props
  return (
    <Label>
      {labelText}
      <TextArea
        value={value}
        rows={8}
        onChange={e => updateValue(e.target.value)}
      />
    </Label>
  )
}

export default StyledTextArea
