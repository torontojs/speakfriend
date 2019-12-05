import Airtable from 'airtable'
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

  const createTalk = event => {
    event.preventDefault()
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
        records.forEach(function(record) {
          console.log(record.getId())
        })
      },
    )
  }

  return (
    <form onSubmit={createTalk}>
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
