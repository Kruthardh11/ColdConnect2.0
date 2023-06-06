import React, { useState } from 'react';
import design from '../assets/design.webp'

const StepOne = ({formData, setFormData}) => {
  const [subdone, setSubdone] = useState("");;

  const validateEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Only numbers validation
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    const { name, email, phone } = formData;

    if (!name.trim()) {
      alert('Name field cannot be empty');
      return;
    }

    if (!email.trim()) {
      alert('Email field cannot be empty');
      return;
    }

    if (!validateEmail(email)) {
      alert('Invalid email');
      return;
    }

    if (!phone.trim()) {
      alert('Phone field cannot be empty');
      return;
    }
    if (!validatePhone(phone)) {
      alert('Invalid phone number');
      return;
    }
    setSubdone('done');
  };


  // const preview =()=>{
  //     return(
  //       <div className='preview'>
  //                 <h2 className='preview-head'>Preview</h2>
  //           <li className="">Name: {formData.name} </li>
  //           <li>email: {formData.email} </li>
  //           <li>phone:  {formData.phone} </li>
  //           <li>country: {formData.country} </li>
  //           <li>profession: {formData.profession} </li>
  //       </div>
  //     )
  // }

  return (
    <div className='m-[5%] bg-gray-200 rounded-md p-[2%] flex flex-col-2 mb-[0%]'>
      <div className="relative">
  <h3 className="absolute top-0 left-0  p-2 text-lg font-bold">
    Step 1: Personal Information
  </h3>
  <img src={design} className="h-96" />
</div>

<div className="flex ml-[15%]">
  <div className="flex flex-col">
    <label className="mb-2 font-bold">Name</label>
    <input
      type="text"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.name}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
    />

    <label className="mb-2 font-bold">Email ID</label>
    <input
      type="email"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="email"
      placeholder="Email"
      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
    />

    <label className="mb-2 font-bold">Phone Number</label>
    <input
      type="tel"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="phone"
      placeholder="Phone"
      onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
    />
  </div>

  <div className="ml-8 flex flex-col">
    <label className="mb-2 font-bold">Country</label>
    <input
      type="text"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="country"
      placeholder="Country"
      onChange={(event) => setFormData({ ...formData, country: event.target.value })}
    />

    <label className="mb-2 font-bold">Profession</label>
    <input
      type="text"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="profession"
      placeholder="Profession"
      onChange={(event) => setFormData({ ...formData, profession: event.target.value })}
    />

    <button className="submit-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
      {subdone === 'done' ? 'Done!' : 'Confirm'}
    </button>
  </div>
</div>

      
  

      {/* <div className='column'>
        {preview()}
      </div> */}
    </div>
  )
}

export default StepOne