import { useState } from 'react';
const PersonalInfoForm = ({personalInfo, onChange}) => {
  return (
    <div className="w3-container margin">
      <h4 className="labels">Personal Information</h4>
      <div className="w3-card w3-padding">
        <div className="w3-row-padding ">
          <div className="w3-half">
            <input className="w3-input w3-border" name="firstName" type="text" placeholder="First Name" value={personalInfo.firstName} 
             onChange={(evt)=> onChange(evt) }/>
          </div>
          <div className="w3-half">
            <input className="w3-input w3-border" name="lastName" type="text" placeholder="Last Name"
             onChange={(evt)=> onChange(evt) }
            value={personalInfo.lastName} />
          </div>
        </div>
        <div className="w3-padding">
          <input className="w3-input w3-border" name="title" type="text" placeholder="Title"
           onChange={(evt)=> onChange(evt) }
          value={personalInfo.title} />
        </div>
        <div className="w3-padding">
          <input className="w3-input w3-border" type="text" placeholder="Address"
           name="address"
           onChange={(evt)=> onChange(evt) }
          value={personalInfo.address} />
        </div>
        <div className="w3-row-padding ">
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Phone Number"
            name="phone"
             onChange={(evt)=> onChange(evt) }
            value={personalInfo.phone} />
          </div>
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Email"
            name="email"
             onChange={(evt)=> onChange(evt) }
            value={personalInfo.email} />
          </div>
        </div>
        <div className="w3-padding">
          <textarea className="w3-input w3-border" type="text" placeholder="Summary"
           name="summary"
           onChange={(evt)=> onChange(evt) }
          value={personalInfo.summary} />
        </div>
      </div>
    </div>
  )
}
export default PersonalInfoForm;