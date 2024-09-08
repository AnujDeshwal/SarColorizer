import React from 'react'
import Navbar from '../components/layout/Navbar';
import MainSection from '../components/specific/MainSection';

const Main = () => {
  return (
   <div className='text-white bg-black '>
    <Navbar flag ={false} text={"Back to Home"} link="/" />
    <MainSection/>
   </div>
  )
}

export default Main;