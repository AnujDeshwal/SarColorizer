import React from 'react'

const Demo = () => {
  return (
    <div className='  w-full h-[100vh] bg-black text-white px-[4rem]'>
    <h1 className=' mt-[6rem] opacity-70'>Product Demo</h1>
        <div className='w-[100%] flex justify-between p-[2rem] mt-2 border-gray-400 rounded-[3rem] border-[1px] h-[70%]'>
            <div className="bg-[url('/input1.png')] bg-no-repeat bg-cover bg-center p-[1rem] border-[1px] border-gray-400 h-full rounded-[3rem] w-[48%]">
                <div className={`bg-black bg-opacity-70 rounded-full  text-center h-[2rem] w-[5rem]  text-white`}><h1>Before</h1></div>
            </div>
            <div className="bg-[url('/output1.png')]  bg-cover bg-center bg-no-repeat p-[1rem] border-[1px] border-gray-400 h-full rounded-[3rem] w-[48%]">
                <div className={`bg-black bg-opacity-70 rounded-full text-center h-[2rem] w-[5rem]  text-white`}><h1>After</h1></div>
            </div>
        </div>
    </div>
  ) 
}

export default Demo