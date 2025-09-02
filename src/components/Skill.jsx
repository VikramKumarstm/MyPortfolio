import React from 'react'

function Skill() {
  return (
    <div className='w-full h-full py-16 bg-[#0F0E47] text-white flex flex-col items-center'>
        <h1 className='text-3xl font-semibold w-full text-center'>My Skills</h1>
        <p className='w-[150px] h-[2px] rounded-2xl bg-indigo-500'></p>
        <div className='w-[80%] pt-8 flex justify-between'>
            <div className="basis-1/2">
                <div className='w-[90%] h-[40px] rounded-[5px] border-2 border-indigo-500 mb-4'>
                    <div className='w-[90%] h-full rounded-[3px] bg-indigo-500 flex items-center'>
                        <p className='pl-8'>JavaScript - 90%</p>
                    </div>
                </div>
                <div className='w-[90%] h-[40px] rounded-[5px] border-2 border-indigo-500 mb-4'>
                    <div className='w-[95%] h-full rounded-[3px] bg-indigo-500 flex items-center'>
                        <p className='pl-8'>React - 95%</p>
                    </div>
                </div>
                <div className='w-[90%] h-[40px] rounded-[5px] border-2 border-indigo-500 mb-4'>
                    <div className='w-[80%] h-full rounded-[3px] bg-indigo-500 flex items-center'>
                        <p className='pl-8'>Tailwind CSS - 80%</p>
                    </div>
                </div>
                <div className='w-[90%] h-[40px] rounded-[5px] border-2 border-indigo-500 mb-4'>
                    <div className='w-[80%] h-full rounded-[3px] bg-indigo-500 flex items-center'>
                        <p className='pl-8'>MySQL - 80%</p>
                    </div>
                </div>
                
            </div>
            <div className="basis-1/2">
                <div className='w-[90%] h-[40px] rounded-[5px] border-2 border-indigo-500 mb-4'>
                    <div className='w-[75%] h-full rounded-[3px] bg-indigo-500 flex items-center'>
                        <p className='pl-8'>Node.js - 75%</p>
                    </div>
                </div>
                <div className='w-[90%] h-[40px] rounded-[5px] border-2 border-indigo-500 mb-4'>
                    <div className='w-[80%] h-full rounded-[3px] bg-indigo-500 flex items-center'>
                        <p className='pl-8'>Express.js - 80%</p>
                    </div>
                </div>
                <div className='w-[90%] h-[40px] rounded-[5px] border-2 border-indigo-500 mb-4'>
                    <div className='w-[90%] h-full rounded-[3px] bg-indigo-500 flex items-center'>
                        <p className='pl-8'>Core Java 90%</p>
                    </div>
                </div>
                <div className='w-[90%] h-[40px] rounded-[5px] border-2 border-indigo-500 mb-4'>
                    <div className='w-[78%] h-full rounded-[3px] bg-indigo-500 flex items-center'>
                        <p className='pl-8'>MongoDB - 78%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill