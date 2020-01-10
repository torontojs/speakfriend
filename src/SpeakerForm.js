import Airtable from 'airtable'
import { Flex, Box } from 'rebass'
import detectDuplicate from './services/detectDuplicate'
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { API_KEY, WORKSPACE } from './constants'
import StyledButton from './components/StyledButton'
import StyledTextArea from './components/StyledTextArea'
import StyledTextInput from './components/StyledTextInput'

const SpeakerForm = () => {
  var base = new Airtable({ apiKey: API_KEY }).base(WORKSPACE)

  const [name, setName] = useState('')
  const [talk, setTalk] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [topics, setTopics] = useState('')
  const [duplicateFound, setDuplicateFound] = useState(false)

  const createTalk = event => {
    event.preventDefault()

    let talks = []

    base('talks')
      .select({
        fields: ['Talk'],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            talks.push(record.fields['Talk'])
          })
          fetchNextPage()
        },
        function done(err) {
          if (detectDuplicate(talks, talk)) {
            setDuplicateFound(true)
            return
          }
          // if no duplicate create the event
          base('talks').create(
            [
              {
                fields: {
                  Speaker: name,
                  Description: description,
                  Talk: talk,
                  Topics: topics,
                  Email: email,
                },
              },
            ],
            function(err, records) {
              if (err) {
                console.error(err)
                return
              }
              setName('')
              setTalk('')
              setEmail('')
              setDescription('')
              setTopics('')
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
          onSubmit={createTalk}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {duplicateFound ? <p>A talk by that name already exists</p> : null}
          <StyledTextInput
            type="text"
            value={name}
            updateValue={setName}
            labelText="your name"
          />

          <StyledTextInput
            type="text"
            value={talk}
            required
            updateValue={setTalk}
            labelText="your talk"
          />
          <StyledTextInput
            type="email"
            value={email}
            updateValue={setEmail}
            labelText="your email"
          />
          <StyledTextArea
            value={description}
            updateValue={setDescription}
            labelText="description"
          />
          <StyledTextArea
            value={topics}
            updateValue={setTopics}
            labelText="enter topics (separate by comma)"
          />
          <StyledButton text="Submit Talk" />
        </Box>
      </Flex>
    </Fade>
  )
}

export default SpeakerForm
