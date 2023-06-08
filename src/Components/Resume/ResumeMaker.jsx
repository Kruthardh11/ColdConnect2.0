import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import GeneratePdf from './GeneratePdf';
import Navbar from '../Navbar';

const ResumeMaker = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    profession: "",
    github:"",
    job1:"",
    summary1:"",
    sd1:"",
    ed1:"",
    emp1:"",
    job2:"",
    summary2:"",
    sd2:"",
    ed2:"",
    emp2:"",
    highSchool: {
      school: '',
      city: '',
      enrollYear: '',
      gradYear: ''
    },
    undergraduate: {
      school: '',
      city: '',
      enrollYear: '',
      gradYear: ''
    },
    masters: {
      school: '',
      city: '',
      enrollYear: '',
      gradYear: ''
    },
    skills: []
  })

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const PageDisplay = () =>{
    if (currentPage === 1){
      return <StepOne formData={formData} setFormData={setFormData} />;
    }
    if (currentPage === 2){
      return <StepTwo formData={formData} setFormData={setFormData} />;
    }
    if (currentPage === 3){
      return <StepThree formData={formData} setFormData={setFormData} />;
    }
    if (currentPage === 4){
      return <StepFour formData={formData} setFormData={setFormData} />;
    }
    if(currentPage === 5){
      return <GeneratePdf formData={formData} setFormData={setFormData} />
    }
  }
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-start sm:flex sm:ml-[0%]' >  
           <h2 className='  font-bold text- xl mt-[2%]'>Create Your Resume</h2>
</div>
    <div>{PageDisplay()}</div>

    <div className="flex justify-center items-center mt-[2%]">
  <button
    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
    onClick={handlePreviousPage}
    disabled={currentPage === 1}
  >
    Previous
  </button>
  <button
    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleNextPage}
    disabled={currentPage === 5}
  >
    Next
  </button>
</div>

  </div>
  )
}

export default ResumeMaker;