import React from 'react'
import { useState } from 'react';

const StepTwo = ({formData, setFormData}) => {

  const [subdone, setSubdone] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Perform validation
    const { jobTitle, employer, jobplace, start, end } = formData;
  
  
    if (!jobTitle.trim()) {
      alert('Job title field cannot be empty');
      return;
    }
  
    if (!employer.trim()) {
      alert('Employer field cannot be empty');
      return;
    }
  
    if (!jobplace.trim()) {
      alert('City, country field cannot be empty');
      return;
    }
  
    // if (!start.trim()) {
    //   alert('Start date field cannot be empty');
    //   return;
    // }
  
    // if (!end.trim()) {
    //   alert('End date field cannot be empty');
    //   return;
    // }
  
    // Submit the form or perform further actions
    // ...
    setSubdone("done")
  };
  
  
  
  // Rest of the code remains the same
  
  // const preview =()=>{
    
    
  //   return(
  //     <div className='preview'>
  //               <h2 className='preview-head'>Preview</h2>
  //         <li>Name: {formData.name} </li>
  //         <li>email: {formData.email} </li>
  //         <li>phone:  {formData.phone} </li>
  //         <li>country: {formData.country} </li>
  //         <li>profession: {formData.profession} </li>
  //         <li>Work History
  //           <li>Job Title: {formData.jobTitle} </li>
  //           <li>employer: {formData.employer} </li>
  //           <li>Start date: {formData.start} </li>
  //           <li>end date : {formData.end} </li>
  //         </li>
      // </div>
    // )
// }

  return (
    <div>
      <h3>Step 2: Work Experience</h3>
      <div className='input-field'>
        <div className='column'>
          <input type='text' className="input-box" placeholder='Job title' onChange={(event)=> setFormData({...formData, jobTitle: event.target.value})} />
          <input type='text'className="input-box" placeholder='employer'onChange={(event)=> setFormData({...formData, employer: event.target.value})} />
          <input type='text' className="input-box" placeholder='city, country'  onChange={(event)=> setFormData({...formData, jobplace: event.target.value})}/>
          <label>Start date </label>
          <input className="input-box" type='date' placeholder='DD-MM-YYYY' onChange={(event)=> setFormData({...formData, start: event.target.value})}/>
          <label>End date</label>
          <input className="input-box" type='date' placeholder='DD-MM-YYYY' onChange={(event)=> setFormData({...formData, end: event.target.value})}/>
          <button className='submit-btn' onClick={handleSubmit}> {subdone === 'done' ? 'Done!' : 'Submit'}</button>

      </div>
      {/* <div className='column'>
        {preview()}
      </div> */}
    </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '50%' }}></div>
      </div>

    </div>
  )
}

export default StepTwo;