import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import HelpAs from './components/HelpAs/HelpAs'
import Market from './components/Market/Market'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Footer from './components/Footer/Footer'
import MarketMessage from './components/Market/MarketMessage'


import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
  <>
     <BrowserRouter>
       <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      {/* <Route path="/HelpAs" element={ }></Route> */}
  
      <Route path="/Market" element={<Market />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/MarketMessage" element={<MarketMessage />}></Route>
     
    </Routes>
    <HelpAs />
<Footer />
  </BrowserRouter>
  </>
  )
}

export default App
