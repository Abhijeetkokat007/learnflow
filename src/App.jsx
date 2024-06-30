import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  
  return (
    <>
    <Navbar/>

    <div className=' dark:bg-black h-screen flex justify-center items-center'>
    <p className="text-[26px] font-extrabold text-black max-sm:hidden dark:text-white">
          Home Page
        </p>
       
        <div className='p-5 m-5 bg-green'></div>
        <div className='p-5 m-5 back-one'></div>
    </div>
      <Footer/>
    </>
  )
}

export default App
