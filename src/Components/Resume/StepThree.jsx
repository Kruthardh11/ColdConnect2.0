import React from 'react';
import design from '../assets/design.webp'


const StepThree = ({formData, setFormData}) => {

  const handleInputChange = (e, field, type) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: {
        ...prevFormData[type],
        [field]: value
      }
    }));

    console.log(formData)
  };
  return (
    <div className='sm:mt-[1%] m-[5%] bg-gray-200 rounded-md p-[2%] sm:flex  sm:flex-col-2 sm:flex-col-2 sm:mb-[0%] overflow-hidden'> 
      <div className="sm:relative">
  <h3 className="sm:absolute sm:top-0 sm:left-0 sm:mb-0 mb-10 sm:p-2 sm:text-lg font-bold text-xl items-center justify-center">
  Step 2: Work Experience
  </h3>
  <img src={design} className="sm:h-96 sm:block hidden" />
</div>
   <div className="flex  sm:flex-cols-3 gap-4">
   <div className='flex flex-col mx-[10%]'>
        <h2>High School</h2>
        <label className="mb-2 font-bold">School Name</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="school"
          value={formData.highSchool.school}
          onChange={(e) => handleInputChange(e, 'school', 'highSchool')}
        />

        <label className="mb-2 font-bold">City</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="city"
          value={formData.highSchool.city}
          onChange={(e) => handleInputChange(e, 'city', 'highSchool')}
        />

        <label className="mb-2 font-bold">Year of Enrolling</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="enrollYear"
          value={formData.highSchool.enrollYear}
          onChange={(e) => handleInputChange(e, 'enrollYear', 'highSchool')}
        />

<label className="mb-2 font-bold">Year of Graduation</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="gradYear"
          value={formData.highSchool.gradYear}
          onChange={(e) => handleInputChange(e, 'gradYear', 'highSchool')}
        />
      </div>

      <div className='flex flex-col mr-[5%]'>
        <h2>Undergraduate</h2>
        <label className="mb-2 font-bold">School Name</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="school"
          value={formData.undergraduate.school}
          onChange={(e) => handleInputChange(e, 'school', 'undergraduate')}
        />

<label className="mb-2 font-bold">City</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="city"
          value={formData.undergraduate.city}
          onChange={(e) => handleInputChange(e, 'city', 'undergraduate')}
        />

        <label className="mb-2 font-bold">Year of Enrolling</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="enrollYear"
          value={formData.undergraduate.enrollYear}
          onChange={(e) => handleInputChange(e, 'enrollYear', 'undergraduate')}
        />

        <label className="mb-2 font-bold">Year of Graduation</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="gradYear"
          value={formData.undergraduate.gradYear}
          onChange={(e) => handleInputChange(e, 'gradYear', 'undergraduate')}
        />
      </div>

      <div className='flex flex-col '>
        <h2>Masters</h2>
        <label className="mb-2 font-bold">School Name</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="school"
          value={formData.masters.school}
          onChange={(e) => handleInputChange(e, 'school', 'masters')}
        />

        <label className="mb-2 font-bold">City</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="city"
          value={formData.masters.city}
          onChange={(e) => handleInputChange(e, 'city', 'masters')}
        />

        <label className="mb-2 font-bold">Year of Enrolling</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="enrollYear"
          value={formData.masters.enrollYear}
          onChange={(e) => handleInputChange(e, 'enrollYear', 'masters')}
        />

<label className="mb-2 font-bold">Year of Graduation</label>
        <input
          type="text"
          className="input-box mb-4 w-64 h-10 px-4 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="gradYear"
          value={formData.masters.gradYear}
          onChange={(e) => handleInputChange(e, 'gradYear', 'masters')}
        />
      </div>
  </div>
  </div>
  )
}

export default StepThree