import React from "react"
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import ColdMail from './Components/ColdMail.jsx'
import ResumeMaker from './Components/Resume/ResumeMaker.jsx'
import Options  from './Components/Options.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login/>  }/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/generatemail' element={ <ColdMail/> }></Route>
        <Route path='/generateResume' element={ <ResumeMaker/> }></Route>
        <Route path='/options' element={ <Options/> } /> 
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
