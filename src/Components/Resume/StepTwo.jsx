import React from 'react'
import { useState } from 'react';
import design from '../assets/design.webp'


const StepTwo = ({formData, setFormData}) => {

  const [subdone, setSubdone] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Perform validation
    const { jobTitle, employer, jobplace, start, end } = formData;

  };

  const handleInputChange = (e, field, type) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: {
        ...prevFormData[type],
        [field]: value
      }
    }));
  };

  console.log(formData)
  

  return (
    <div className='sm:mt-[1%] m-[5%] bg-gray-200 rounded-md p-[2%] sm:flex  sm:flex-col-2 sm:flex-col-2 sm:mb-[0%] overflow-hidden'>
       <div className="sm:relative">
  <h3 className="sm:absolute sm:top-0 sm:left-0 sm:mb-0 mb-10 sm:p-2 sm:text-lg font-bold text-xl items-center justify-center">
  Step 2: Work Experience
  </h3>
  <img src={design} className="sm:h-96 sm:block hidden" />
</div>
      
      <div className="sm:flex sm:flex-col-2 sm:ml-[15%]">
        <div className="flex flex-col items-center justify-center">
        <label className="mb-2 font-bold">Job Title</label>
    <input
      type="text"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.job1}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, job1: event.target.value })}
    />

<label className="mb-2 font-bold">Employer Name</label>
    <input
      type="text"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.emp1}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, emp1: event.target.value })}
    />

<label className="mb-2 font-bold">Start Date</label>
    <input
      type="date"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.sd1}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, sd1: event.target.value })}
    />

<label className="mb-2 font-bold">End Date</label>
    <input
      type="date"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.ed1}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, ed1: event.target.value })}
    />

<label className="mb-2 font-bold">Job Summary</label>
<textarea
  className="input-box mb-4 w-64 h-24 px-4 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  name="summary2"
  value={formData.summary1}
  placeholder="Job Summary"
  onChange={(event) => setFormData({ ...formData, summary1: event.target.value })}
></textarea>

          </div>

          <div className="flex flex-col items-center justify-center sm:ml-[15%] ">
          <label className="mb-2 font-bold">Job Title 2</label>
    <input
      type="text"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.job2}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, job2: event.target.value })}
    />

<label className="mb-2 font-bold">Employer Name 2</label>
    <input
      type="text"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.emp2}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, emp2: event.target.value })}
    />

<label className="mb-2 font-bold">Start Date</label>
    <input
      type="date"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.sd2}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, sd2: event.target.value })}
    />

<label className="mb-2 font-bold">End Date</label>
    <input
      type="date"
      className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      value={formData.ed2}
      placeholder="Name"
      onChange={(event) => setFormData({ ...formData, ed2: event.target.value })}
    />

<label className="mb-2 font-bold">Job Summary</label>
<textarea
  className="input-box mb-4 w-64 h-24 px-4 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  name="summary2"
  value={formData.summary2}
  placeholder="Job Summary"
  onChange={(event) => setFormData({ ...formData, summary2: event.target.value })}
></textarea>

            
          </div>
    </div>
    </div>
  )
}

export default StepTwo;