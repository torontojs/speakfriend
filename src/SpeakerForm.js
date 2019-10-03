import React from 'react'
import styled from 'styled-components'

let Form = styled.form`
  height: 200px;
  width: 50%;
  margin: auto;
  text-align: center;
`

let Input = styled.input`
  width: 70%
  height: 25px;
  margin: 1%;
  font-size: 1em;
  &:focus {
    border: 0px solid black;
    color: black; 
  }
`
let TextArea = styled.textarea`
  height: 80px;
  width: 70%;
  margin: 1%;
  font-size: 1em;
`
let Button = styled.button`
  height: 20%;
  width: 30%;
  margin-top: 2%;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: 1em;
  font-weight: bold;
`

class SpeakerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ``,
      jobTitle: ``,
      emailAddress: ``,
      bio: ``,
    }
  }

  //to handle input changes//
  handleInputChanges = key => e => {
    this.setState({ [key]: e.target.value })
  }
  render() {
    return (
      <Form action="">
        <div className="formRow">
          <div>
            <Input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={this.state.firstName}
              onChange={this.handleInputChanges(`firstName`)}
            />
          </div>
        </div>
        <div className="formRow">
          <div>
            <Input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={this.state.lastName}
              onChange={this.handleInputChanges(`lastName`)}
            />
          </div>
        </div>
        <div className="formRow">
          <div>
            <Input
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              value={this.state.jobTitle}
              onChange={this.handleInputChanges(`jobTitle`)}
            />
          </div>
        </div>
        <div className="formRow">
          <div>
            <Input
              type="email"
              name="emailAddress"
              placeholder="Enter email address"
              value={this.state.emailAddress}
              onChange={this.handleInputChanges(`emailAddress`)}
            />
          </div>
        </div>
        <div className="formRow">
          <div>
            <TextArea
              type="textarea"
              name="bio"
              placeholder="Tell us something about yourself"
              value={this.state.bio}
              onChange={this.handleInputChanges(`bio`)}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default SpeakerForm
