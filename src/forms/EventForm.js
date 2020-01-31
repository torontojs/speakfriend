import Airtable from 'airtable'
import { API_KEY, WORKSPACE } from '../constants'
import { Flex, Box } from 'rebass'
import DateInput from '../components/DateInput'
import Fade from 'react-reveal/Fade'
import detectDuplicate from '../services/detectDuplicate'
import React, { useState } from 'react'
import StyledButton from '../components/StyledButton'
import StyledTextArea from '../components/StyledTextArea'
import StyledTextInput from '../components/StyledTextInput'

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
              setDuplicateFound(false)
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
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center">
        <Box
          as="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          onSubmit={createEvent}
        >
          {duplicateFound ? <p>An event by that name already exists</p> : null}
          <StyledTextInput
            type="text"
            labelText="event"
            value={eventName}
            updateValue={setEventName}
          />
          <StyledTextInput
            type="text"
            labelText="organization"
            value={organization}
            updateValue={setOrganization}
          />
          <StyledTextInput
            type="email"
            value={email}
            labelText="email"
            updateValue={setEmail}
          />
          <StyledTextInput
            type="text"
            value={location}
            labelText="location"
            updateValue={setLocation}
          />
          <DateInput value={date} updateValue={setDate} />
          <StyledTextArea
            value={description}
            labelText="description"
            updateValue={setDescription}
          />
          <StyledButton text="Submit Event" />
        </Box>
      </Flex>
    </Fade>
  )
}

export default EventForm
