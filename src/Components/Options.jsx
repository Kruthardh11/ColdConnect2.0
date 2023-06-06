import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaFilePdf,FaRegFilePdf } from "react-icons/fa"

const ResumeSelect = () => {
  const navigate = useNavigate();

  const handleFirstClick = () => {
    navigate('/generatemail'); // Redirect to the generateMail route
  };

  const handleSecondClick = () => {
    navigate('/generateResume'); // Redirect to the generateResume route
  };

  const handlePrevClick = () => {
    navigate('/'); // Redirect to the home page route
  };

  return (
    <>
      <Navbar /> 

      <div className='sm:flex sm:flex-col-2 m-[5%] border-4 border-blue-800 p-[4%] bg-blue-100 mb-[1%]'>
      <div className='border-4 border-yellow-500 mb-[25%] sm:mb-[0%]' onClick={handleFirstClick}>
  <div className='sm:p-[10%] p-[7%] '>
    <div>
      <Link to='/generatemail' >
      <span className='text-6xl'>
        <FaFilePdf className='ml-[40%] mb-[10%]'/>  
      </span>
      </Link>
      <h2 className='font-ubuntu text-2xl text-gray-600 sm:ml-[13%] ml-[5%]'>I already have a resume</h2>
      <p className='font-ubuntu text-lg text-gray-500 hidden md:block'>We'll re-format it and fill in your information so you don't have to.</p>
    </div>
  </div>
</div>


        <div className='border-4 border-yellow-500 sm:ml-[15%]' onClick={handleSecondClick}> 
          <div className="sm:p-[10%] p-[7%]">
            <div>
              <Link to='/generateResume'>
              <span className='text-6xl'>
                <FaRegFilePdf className='ml-[40%] mb-[10%]' />
              </span>
              </Link>
            <h2 className='font-ubuntu text-2xl text-gray-600  ml-[5%] sm:ml-[19%]'>Create a new Resume</h2>
            <p className='font-ubuntu text-lg text-gray-500 hidden md:block'>Step by step procedure followed to create a customizable resume</p>
            </div>
          </div>
        </div>
      </div>

      
<Link to='/' ><button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-[40%] mt-[5%] sm:ml-[46%]  " onclick={handlePrevClick}>
  <span>Go Back</span>
</button></Link>
    </>
  );
};

export default ResumeSelect;
