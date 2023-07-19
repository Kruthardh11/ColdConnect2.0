import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./mid.css"
import karthik from "../Components/assets/karthik.jpeg"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const OurTeam = () => {
  return (
    <>
    <Navbar/>
      <div>
        <div className="cards">

        <div className="card flex flex-col items-center">
          <div className="image my-4">
            <img src={karthik} alt="" className="rounded-full max-w-40 max-h-40 border border-pink-300" />
          </div>
          <div className="text-2xl m-1">
            Karthik Nadar
          </div>
          <div className="text-2xl m-1">
            Fullstack developer
          </div>
          <div className="socials">
            <div className="github">
              <a href="https://github.com/karthiknadar1204" target='_blank' rel="noreferrer" className="hover:text-[#e5e5e5] transform hover:scale-110 transition-all">
                <AiFillGithub/>
              </a>
            </div>

            <div className="linkedin">
              <a href="https://www.linkedin.com/in/karthik-nadar-b2155a25b/" target='_blank' rel="noreferrer" className="hover:text-[#0077B5] transform hover:scale-110 transition-all">
                <AiFillLinkedin/>
              </a>
            </div>
          </div>
        </div>

        <div className="card flex flex-col items-center">
          <div className="image my-4">
            <img src={karthik} alt="" className="rounded-full max-w-40 max-h-40 border border-pink-300" />
          </div>
          <div className="text-2xl m-1">
            Kruthardh Tirunahari
          </div>
          <div className="text-2xl m-1">
            Fullstack developer
          </div>
          <div className="socials">
          <div className="github">
            <a href="https://github.com/Kruthardh11" target='_blank' rel="noreferrer" className='hover:text-[#e5e5e5] transform hover:scale-110 transition-all' >
              <AiFillGithub/>
            </a>
          </div>

          <div className="linkedin">
            <a href='https://www.linkedin.com/in/kruthardh-tirunahari-bba216264/' target='_blank' rel="noreferrer" className='hover:text-[#0077B5] transform hover:scale-110 transition-all' >
              <AiFillLinkedin/>
            </a>
          </div>
          </div>
        </div>


        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
      <Footer/>
    </>
  )
}

export default OurTeam