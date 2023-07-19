import React from 'react'
import logo from "../Components/assets/icon.svg"
const Footer = () => {
  return (
    <>
 <div className="bg-purple-400 h-48 w-full flex flex-col justify-center">
  <img src={logo} alt="" className="h-16" />
  <div className="flex justify-between">
  <div className="text-left ml-8 text-xl">
    Designed to revolutionize the way job seekers approach their job search.
  </div>
  <div className="text-right mr-8 text-xl">
    Made by Karthik and Kruthardh
  </div>
</div>
</div>
    </>
  )
}

export default Footer