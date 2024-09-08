import React from 'react'
import Navbar from '../components/layout/Navbar';
import OpSection from '../components/specific/OpSection';

const Output = () => {
  return (
    <div className='text-white'>
        <Navbar flag ={false} link='/main' text={"Enhance Again"}/>
        <OpSection/>
    </div>
  )
}

export default Output;