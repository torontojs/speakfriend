import React, { useState } from 'react'
import StyledButton from './components/StyledButton'

const SpeakerForm = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
    const [topics, setTopics] = useState("")
    

    return (
      <form action="">
        <div className="formRow">
          <label>
            Name
            <input type="text" name="name" value={name} required  onChange={e => setName(e.target.value)}/>
          </label>
        </div>
        <div className="formRow">
          <label>
            Email Address
            <input type="email" name="emailAddress" value={email} required onChange={e => setEmail(e.target.value)}/>
          </label>
        </div>
        <div className="formRow">
          <label>
            Description of your talk
            <input type="textarea" name="description" value={description} required onChange={e => setDescription(e.target.value)}/>
          </label>
        </div>
        <div className="formRow">
          <label>
            Topics (separate by comma)
            <input type="textarea" value={topics} name="topics" onChange={e => setTopics(e.target.value)}/>
          </label>
        </div>
        <StyledButton text="Submit Talk"/>
      </form>
    )
}

export default SpeakerForm