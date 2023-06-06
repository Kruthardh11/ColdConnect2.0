import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
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
    jobTitle: "",
    employer: "",
    jobplace: "",
    startDate: "",
    endDate: "",
    school: "",
    schoolArea: "",
    schoolStart: "",
    schoolEnd: "",
    undergradclg: "",
    undergradArea: "",
    undergradStart: "",
    undergradEnd: "",
    postgradclg: "",
    postgradArea: "",
    postgradStart: "",
    postgradEnd: "",
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