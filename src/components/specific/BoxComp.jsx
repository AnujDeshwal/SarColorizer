import React, { useState } from 'react'

const BoxComp = ({category , setCategory , title="" , options=[]}) => {
    // const [curr , setCurr] = useState(-1);

  return (
    <div className="flex  text-white flex-col pl-4 sm:pl-0  w-[90%] sm:w-[100%]  text-[1.2rem] gap-[0.7rem] ">
    <p className='font-medium text-[1rem] sm:text-[1.2rem]'>
      {" "}
      {title} <span className="font-bold text-red-500 ">*</span>
    </p>
    <div className="flex flex-col sm:flex-row w-full gap-5  text-[1rem]   sm:text-[1.1rem] sm:items-center ">
      {" "}
      {options && options.map((elem , index)=>(
        <div onClick={e=>setCategory(index)} key={index} className={`transition-all ease-in-out duration-700 cursor-pointer flex justify-center ${index===category?"bg-[#F03658] text-white":""} w-[5rem] sm:w-full border-gray-400 border-[1px] rounded-full gap-4  items-center`}>
        <h1 className=' text-[0.9rem] sm:text-[1rem] p-1 sm:p-3 '>{elem}</h1>
      </div>
      ))}
    </div>
  </div>
  )
}

export default BoxComp