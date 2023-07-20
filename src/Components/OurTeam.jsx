import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./mid.css";
import karthik from "../Components/assets/karthik.jpeg";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const OurTeam = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          {/* Add justify-center class to center the cards on desktop */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-center ">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="image my-4">
                <img src={karthik} alt="" className="rounded-full max-w-40 max-h-40 border border-pink-300" />
              </div>
              <div className="text-2xl m-1">
                Karthik Nadar
              </div>
              <div className="text-2xl m-1">
                Fullstack developer
              </div>
              <div className="socials mt-4">
                <div className="github">
                  <a href="https://github.com/karthiknadar1204" target='_blank' rel="noreferrer" className="hover:text-gray-700 transform hover:scale-110 transition-all">
                    <AiFillGithub />
                  </a>
                </div>
                <div className="linkedin">
                  <a href="https://www.linkedin.com/in/karthik-nadar-b2155a25b/" target='_blank' rel="noreferrer" className="hover:text-blue-500 transform hover:scale-110 transition-all">
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center mt-8 md:mt-0">
              <div className="image my-4">
                <img src={karthik} alt="" className="rounded-full max-w-40 max-h-40 border border-pink-300" />
              </div>
              <div className="text-2xl m-1">
                Kruthardh Tirunahari
              </div>
              <div className="text-2xl m-1">
                Fullstack developer
              </div>
              <div className="socials mt-4">
                <div className="github">
                  <a href="https://github.com/Kruthardh11" target='_blank' rel="noreferrer" className='hover:text-gray-700 transform hover:scale-110 transition-all'>
                    <AiFillGithub />
                  </a>
                </div>
                <div className="linkedin">
                  <a href='https://www.linkedin.com/in/kruthardh-tirunahari-bba216264/' target='_blank' rel="noreferrer" className='hover:text-blue-500 transform hover:scale-110 transition-all'>
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurTeam;
