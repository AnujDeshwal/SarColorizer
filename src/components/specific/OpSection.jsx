import React from "react";
import { useDispatch, useSelector } from "react-redux";

const OpSection = () => {
    const result = useSelector((state) => state.main.cImage);
    const input = useSelector((state)  => state.main.inpImage)
    console.log("input",input)
  return (
    <div className="flex flex-col bg-black text-white h-[100vh] w-screen px-[4rem]">
    <div className="flex flex-col mt-[6rem]   ">
        {" "}
        <h1 className="text-[2.2rem] text-left  text-[#F03658]">
        SAR Colorizer
        </h1>
        <h1 className="text-[0.9rem] text-left  ">
        Upscale images' quality to elevate visual storytelling and wow your audience.
        </h1>
    </div>
      <div className="flex">
      <div className='  w-full h-[80vh] bg-black text-white '>
    <h1 className='mt-[1rem] opacity-70'>Product Result</h1>
    <div className="flex w-full gap-[1rem] h-[60vh] items-center ">
    <div className='w-[100%] mt-[1rem] flex justify-between p-[1rem]  border-gray-400 rounded-[3rem] border-[1px] h-[90%]'>
            <div  style={{
              backgroundImage: ` url("${input}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} className={`p-[1rem] border-[1px] border-gray-400 h-full rounded-[3rem] w-[48%]`}>
                <div className='bg-black rounded-full text-center h-[2rem] w-[5rem]  text-white'><h1>Before</h1></div>
            </div>
            <div  style={{
              backgroundImage: ` url("${result}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}  className={`bg-cover bg-center p-[1rem] border-[1px] border-gray-400 h-full rounded-[3rem] w-[48%]`}>
                <div className={` bg-black bg-cover bg-center rounded-full text-center h-[2rem] w-[5rem]  text-white`}><h1>After</h1></div>
            </div>
        </div>   
    <div className="border-gray-400 flex flex-col justify-center items-center rounded-2xl border-dashed border-[1px] w-[20rem] h-[10rem] px-[2rem]">
          <button
            className="bg-[#F03658] text-white rounded-full w-[10rem] active:scale-75 transition-all ease-in-out duration-700 h-[2.5rem] "
          >
          <a href={result} >Download</a>
            
          </button>
        </div>
    </div>
         
    </div>

      </div>
    </div>
  );
};

export default OpSection;
