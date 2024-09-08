import React from "react";
import Navbar from "../layout/Navbar";
import { PiShareFill } from "react-icons/pi";
import { Link } from "react-router-dom";
 
const Herosection = () => {
  return (
    <div className="bg-black text-white">
    <div className=" bg-[url('./webpeditor_section=hero.webp')] w-[100vw] bg-right h-[100vh] bg-cover">
      <Navbar />
      <div className="flex flex-col mt-[10rem] items-center justify-between gap-[2rem]">
        {" "}
        <h1 className="text-[5rem] text-center">
          The only photo enhancer SAR will ever need
        </h1>
        <h1 className="cursor-pointer text-center opacity-60 px-[8rem]">
          Transform your grayscale SAR images into vivid, high-definition
          visuals. Enhance details and bring new life to Earth observations with
          professional-level colorization
        </h1>
        <div className= "  text-black w-[9rem] px-[0.5rem] rounded-[8rem] flex justify-around items-center bg-white ">
        <Link to={'/main'}>
          <button className="bg-white active:scale-75 transition-transform ease-in-out duration-700 rounded-[8rem] h-[2.7rem]  text-black">
            Try GeoTint
           
          </button>
          </Link>
          <PiShareFill
          className=""/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Herosection;
