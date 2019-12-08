import Airtable from 'airtable'
import { API_KEY, WORKSPACE } from './constants'
import DateTimePicker from 'react-datetime-picker'
import React, { useState } from 'react'
import StyledButton from './components/StyledButton'

const EventForm = () => {
  const [eventName, setEventName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [date, setDate] = useState(new Date())
  const createEvent = event => {}

  const dateChange = date => {
    console.log(date)
  }

  return (
    <form onSubmit={createEvent}>
      <div className="formRow">
        <label>
          Event Name
          <input
            type="text"
            name="event"
            required
            value={eventName}
            onChange={e => setEventName(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Organization
          <input
            type="text"
            name="organization"
            required
            value={organization}
            onChange={e => setOrganization(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Date
          <DateTimePicker
            value={date}
            onChange={date => setDate(date)}
            disableCalendar={true}
            disableClock={true}
            required
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Email Address
          <input
            type="email"
            name="emailAddress"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>
      <StyledButton text="Submit Event" />
    </form>
  )
}

export default EventForm
