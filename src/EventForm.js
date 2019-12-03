import React from 'react';
import StyledButton from './components/StyledButton';

class EventForm extends React.Component {
  render() {
    return (
      <form action="">
        <div className="formRow"></div>
        <div className="formRow">
          <label>
            First Name
            <input type="text" name="firstName"/>
          </label>
        </div>
        <div className="formRow">
          <label>
            Last Name
            <input type="text" name="lastName"/>
          </label>
        </div>
        <div className="formRow">
          <label>
            Job Title
            <input type="text" name="jobTitle"/>
          </label>
        </div>
        <div className="formRow">
          <label>
            Email Address
            <input type="email" name="emailAddress"/>
          </label>
        </div>
        <div className="formRow">
          <label>
            Bio
            <input type="textarea" name="bio"/>
          </label>
        </div>
        <StyledButton text="Submit Event"/>
      </form>
    )
  }
}

export default EventForm