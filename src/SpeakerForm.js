import React from 'react';

class SpeakerForm extends React.component {
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

      </form>
    )
  }
}

export default SpeakerForm;