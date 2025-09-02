import React, { useState } from 'react'
import Button from './Button/Button'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function () {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0F0E47] w-full flex-col sm:flex-row flex items-center sm:justify-center fixed">
        <nav className='h-16 w-[80%] flex items-center justify-between'>
            <div className="text-xl sm:text-2xl text-white font-bold sm:basis-[25%]">
                Vikram Kumar
            </div>

            <div className="basis-[55%] hidden sm:block">
                <ul className='flex justify-between text-gray-100 text-lg'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Certificate</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="basis-[20%] text-end hidden sm:block">
                <Button text='Get Started'/>
            </div>

            <button 
            className=' block sm:hidden text-2xl text-white space-y-2'
            onClick={() => setIsOpen(!isOpen)}
            >

                {
                    isOpen ? < RxCross2 /> : < GiHamburgerMenu />
                }

            </button>

        </nav>

        <div className={`${isOpen ? "block" : "hidden"} block sm:hidden bg-gray-400 w-full pl-[10%] py-6`}>
            <div>
                <ul className='text-gray-100 text-lg'>
                    <li className='py-1'><a href="#">Home</a></li>
                    <li className='py-2'><a href="#">About</a></li>
                    <li className='py-2'><a href="#">Services</a></li>
                    <li className='py-2'><a href="#">Certificate</a></li>
                    <li className='py-2'><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className='pt-2'>
                <Button text='Get Started'/>
            </div>
        </div>
    </div>
  )
}
