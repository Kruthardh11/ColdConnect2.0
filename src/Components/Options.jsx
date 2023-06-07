import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaFilePdf,FaRegFilePdf } from "react-icons/fa";
import bgImg from './assets/bgcc.webp'

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
    <div className='relative overflow-hidden' style={{ backgroundImage: `url(${bgImg})` , backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
      <Navbar /> 
      <div className="flex flex-col items-center justify-center m-5 ">
  <div className="hover:bg-gray-200 bg-white cursor-pointer shadow-lg rounded-lg p-7 mb-5 sm:flex sm:flex-row sm:mb-0 sm:mt-6 sm:mb-16" onClick={handleFirstClick}>
    <Link to="/generatemail">
      <span className="text-6xl">
        <FaFilePdf className="sm:ml-40 ml-20 mb-10" />
      </span>
    </Link>
    <div className="sm:ml-5">
      <h2 className="font-ubuntu text-2xl text-gray-600">I already have a resume</h2>
      <p className="font-ubuntu text-lg text-gray-500 hidden md:block">
        We'll re-format it and fill in your information so you don't have to.
      </p>
    </div>
  </div>

  <div className="hover:bg-gray-200 bg-white cursor-pointer shadow-lg rounded-lg p-7 sm:flex sm:flex-row" onClick={handleSecondClick}>
    <Link to="/generateResume">
      <span className="text-6xl">
        <FaRegFilePdf className="sm:ml-40 ml-20 mb-10" />
      </span>
    </Link>
    <div className="sm:ml-5">
      <h2 className="font-ubuntu text-2xl text-gray-600">Create a new Resume</h2>
      <p className="font-ubuntu text-lg text-gray-500 hidden md:block">
        Step-by-step procedure followed to create a customizable resume
      </p>
    </div>
  </div>
</div>

<Link to="/">
  <button className="bg-gray-300 sm:ml-[46%] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-40 mt-5 sm:mb-[15%] mb-[90%]">
    <span> Back</span>
  </button>
</Link>

  

    </div>
  );
};

export default ResumeSelect;
