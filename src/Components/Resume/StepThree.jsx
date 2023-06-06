import React from 'react'

const StepThree = ({formData, setFormData}) => {
  return (
    <div> <h2> Educational Details</h2>
    <div className='column-three'>
    <div className='high-school'>
      <p>High School</p>
      <input className="input-box" type='text' onChange={(event)=> setFormData({...formData, school: event.target.value})} placeholder='school name'/>
      <input className="input-box" type='text' placeholder='city' onChange={(event)=> setFormData({...formData, schoolArea: event.target.value})}/>
      <label>Start</label>
      <input className="input-box" type='date' placeholder='' />
      <label>passed out on</label>
      <input className="input-box" type="date" placeholder='' />
    </div>
    <div className='undergrad'>
      <p>Undergrad</p>
      <input className="input-box" type='text' onChange={(event)=> setFormData({...formData, undergradclg: event.target.value})} placeholder='college/university name'/>
      <input className="input-box" type='text'onChange={(event)=> setFormData({...formData, undergradArea: event.target.value})} placeholder='city' />
      <label>Start</label>
      <input className="input-box" type='date' placeholder='' />
      <label>graduated out on</label>
      <input className="input-box" type="date" placeholder='' />
    </div>
    <div className='postgrad'>
      <p>Post Graduate</p>
      <input className="input-box" type='text' onChange={(event)=> setFormData({...formData, postgradclg: event.target.value})} placeholder='college/unicersity name'/>
      <input className="input-box" type='text' onChange={(event)=> setFormData({...formData, postgradArea: event.target.value})} placeholder='city' />
      <label>Start</label>
      <input className="input-box" type='date' placeholder='' />
      <label>graduated out on</label>
      <input className="input-box" type="date" placeholder='' />
    </div>
    </div>
    {/* <div className='column-three '>
      {preview()}
    </div> */}
  </div>
  )
}

export default StepThree