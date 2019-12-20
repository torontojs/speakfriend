import Airtable from 'airtable'
import { API_KEY, WORKSPACE } from './constants'
import DateTimePicker from 'react-datetime-picker'
import detectDuplicate from './services/detectDuplicate'
import React, { useState } from 'react'
import StyledButton from './components/StyledButton'

const EventForm = () => {
  var base = new Airtable({ apiKey: API_KEY }).base(WORKSPACE)

  const [eventName, setEventName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [organization, setOrganization] = useState('')
  const [date, setDate] = useState(new Date())
  const [location, setLocation] = useState('')
  const [duplicateFound, setDuplicateFound] = useState(false)

  const createEvent = event => {
    event.preventDefault()

    const day = date.toDateString()
    const time = date.toString().slice(16, 21)
    let events = []

    base('events')
      .select({
        fields: ['Event'],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            events.push(record.fields['Event'])
          })
          fetchNextPage()
        },
        function done(err) {
          if (detectDuplicate(events, eventName)) {
            setDuplicateFound(true)
            return
          }
          // if no duplicate create the event
          base('events').create(
            [
              {
                fields: {
                  Event: eventName,
                  Description: description,
                  Email: email,
                  Location: location,
                  Organization: organization,
                  Date: `${day}-${time}`,
                },
              },
            ],
            function(err, records) {
              if (err) {
                console.error(err)
                return
              }
              setEmail('')
              setOrganization('')
              setEventName('')
              setDescription('')
              setDate(new Date())
              setLocation('')
            },
          )
          if (err) {
            console.error(err)
            return
          }
        },
      )
  }

  return (
    <form onSubmit={createEvent}>
      {duplicateFound ? <p>Event already exists</p> : null}
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
          Description of your event
          <input
            type="textarea"
            name="description"
            value={description}
            required
            onChange={e => setDescription(e.target.value)}
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
      <div className="formRow">
        <label>
          Location
          <input
            type="text"
            name="location"
            required
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>
      </div>
      <StyledButton text="Submit Event" />
    </form>
  )
}

export default EventForm
