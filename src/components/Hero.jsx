import React from 'react'
import Button from './Button/Button'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import myImage from '../assets/images/vikram-port.png'

export default function Hero() {
  return (
    <div className='w-full h-full sm:h-[calc(100vh+45px)] flex justify-center bg-[#272757]'>
        <div className='w-[80%] h-full sm:flex items-center justify-between'>
            <div className="basis-[60%]">
                <span className='w-[50px] h-[2px] bg-indigo-500 inline-block'></span>
                <p className='inline-block text-indigo-500 text-sm font-semibold'>Welcome to Dreamer</p>
                <h1 className='text-3xl font-bold text-white mb-1'>Hi I am <span className='text-indigo-500'>Vikram</span> Kumar</h1>
                <h1 className='text-2xl font-bold text-white mb-1'>Software Engineer at TCS</h1>
                <p className='text-white text-sm font-normal pb-8 pr-6'>
                    I have strong knowledge of Java, Data Structures & Algorithms (DSA), JavaScript, React.js, Node.js, Express.js, MySQL, and MongoDB.
                    I love building scalable web applications and solving real-world problems with clean and efficient code.
                </p>

                {/* buttons */}
                <div className='flex items-center'>
                    <Button text="More About Me" />
                    
                    {/* Social media links */}
                    <ul className='flex pl-4'>
                        <li className='px-2 text-xl'><a href="https://www.linkedin.com/in/vikram-kumar-838a90291/" target="_blank" className='text-indigo-500'> < FaLinkedinIn /> </a></li>
                        <li className='px-2 text-xl'><a href="https://github.com/VikramKumarstm" target="_blank" className='text-indigo-500'> < FaGithub /> </a></li>
                        <li className='px-2 text-xl'><a href="" target="_blank" className='text-indigo-500'> < FaTwitter /> </a></li>
                    </ul>
                </div>

            </div>
            <div className="basis-[40%] pt-4 pb-8 sm:pb-0">
                <img src={myImage} alt="Vikram" className='border-2 border-indigo-500 h-[500px] rounded-2xl' />
            </div>
        </div>
    </div>
  )
}
