import React, { useState } from 'react'
import styled from 'styled-components'

let Input = styled.input`
  font-family: inherit;
  font-size: 16px;
  color: inherit;
  background-color: ${props => props.theme.colors.greyLight0};
  border: none;
  padding: 4px 12px 6px 38px;
  margin-left: -36px;
  border-radius: 100px;
  outline: none;
  width: 60%;
  transition: all 0.4s;
  &:hover {
    background-color: ${props => props.theme.colors.greyLight};
  }
  &:focus {
    width: 100%;
  }
  &::-webkit-input-placeholder {
    font-weight: 400;
    color: ${props => props.theme.colors.greyLight2};
  }
  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    width: 100%;
    &::-webkit-input-placeholder {
      text-align: center;
    }
  }
`
let Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    width: 100%;
  }
`
let Label = styled.label`
  padding: 8px 2px 0 10px;
  z-index: 1;
`
let Svg = styled.svg`
  height: 24px;
  width: 24px;
  fill: ${props => props.theme.colors.greyLight2};
`

export default ({ searchTopic, placeholder }) => {
  let [sortWord, setSortWord] = useState('')

  const handleChange = event => {
    searchTopic(event.target.value)
    setSortWord(event.target.value)
  }

  return (
    <Form>
      <Label>
        <Svg>
          <use xlinkHref="svg/sprite.svg#icon-magnifying-glass"></use>
        </Svg>
      </Label>
      <Input
        type="text"
        value={sortWord}
        onChange={e => handleChange(e)}
        placeholder={placeholder}
      />
    </Form>
  )
}
