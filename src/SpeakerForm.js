import Airtable from 'airtable'
import detectDuplicate from './services/detectDuplicate'
import React, { useState } from 'react'
import { API_KEY, WORKSPACE } from './constants'
import StyledButton from './components/StyledButton'

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
    <form onSubmit={createTalk}>
      {duplicateFound ? <p>Talk already exists</p> : null}
      <div className="formRow">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Talk Name
          <input
            type="text"
            name="talk"
            value={talk}
            required
            onChange={e => setTalk(e.target.value)}
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
            required
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Description of your talk
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
          Topics (separate by comma)
          <input
            type="textarea"
            value={topics}
            name="topics"
            onChange={e => setTopics(e.target.value)}
          />
        </label>
      </div>
      <StyledButton text="Submit Talk" />
    </form>
  )
}

export default SpeakerForm
