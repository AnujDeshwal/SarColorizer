import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex bg-black text-white h-[7rem] items-center   justify-between px-[4rem]'>
        <h1>Copyright © | GeoTint </h1>
        <div className='flex justify-around w-[10rem]'>
        <FaInstagramSquare  className='cursor-pointer text-2xl'/>
        <FaFacebookSquare className='cursor-pointer text-2xl'/>
        <FaLinkedin className='cursor-pointer text-2xl'/>

        </div>
    </div>
  )
}

export default Footer