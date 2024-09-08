import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({flag=true , text="Try GeoTint" , link="/main"}) => {
  return (
    <div className="flex bg-black z-10 justify-between w-full h-[6rem] px-[4rem] items-center fixed top-0">
      <h1 className="text-[1.8rem]">GeoTint</h1>
      {flag && <h1 className="cursor-pointer">Demo</h1>}
      <div>
      <Link to={link}><button className="bg-white active:scale-75 transition-transform ease-in-out duration-700 rounded-[8rem] h-[2.7rem] w-[8rem] text-black">
          {text}

        </button></Link>
        
      </div>
    </div>
  );
};

export default Navbar;
