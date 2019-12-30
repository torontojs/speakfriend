import DateTimePicker from 'react-datetime-picker'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

let Label = styled.label`
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
  width: 100%;
`

const DateInput = props => {
  const { value, updateValue } = props
  return (
    <Label>
      date
      <DateTimePicker
        value={value}
        onChange={date => updateValue(date)}
        disableCalendar={true}
        disableClock={true}
        required
      />
    </Label>
  )
}

export default DateInput
