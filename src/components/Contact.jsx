import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Button from './Button/Button';

function Contact() {
  return (
    <div className='w-full h-full flex justify-center bg-[#0F0E47] text-white'>
        <div className='w-[80%] py-16 sm:flex'>
            <div className="basis-1/2">
                <h1 className='text-3xl font-semibold'>Get In Touch</h1>
                <p className='w-[85px] h-[2px] rounded-2xl bg-indigo-500 mb-2'></p>
                <p className='text-sm font-normal mb-6'>
                    I’m always open to discussing new projects, creative ideas, or opportunities to be part 
                    of your vision. If you have any questions, want to collaborate, or just want to say 
                    hello—feel free to reach out!
                </p>
                <div>
                    <div className='flex items-center mb-4'>
                        <p className='mr-2'>
                            < FaPhoneAlt className='text-5xl bg-indigo-500 px-2 py-3 rounded-md' />
                        </p>
                        <ul>
                            <li className='text-xl font-medium text-indigo-500'>Phone</li>
                            <li><a href="tel:+919608978903" className='text-sm font-normal text-gray-400'>+91 96089 78903</a></li>
                        </ul>
                    </div>

                    <div className='flex items-center mb-4'>
                        <p className='mr-2'>
                            < SiGmail className='text-5xl bg-indigo-500 px-2 py-3 rounded-md' />
                        </p>
                        <ul>
                            <li className='text-xl font-medium text-indigo-500'>Email</li>
                            <li><a href="tel:+919608978903" className='text-sm font-normal text-gray-400'>vikramthakurabm23@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className='flex items-center mb-4'>
                        <p className='mr-2'>
                            < FaInstagram className='text-5xl bg-indigo-500 px-2 py-3 rounded-md' />
                        </p>
                        <ul>
                            <li className='text-xl font-medium text-indigo-500'>Instagram</li>
                            <li><a href="tel:+919608978903" className='text-sm font-normal text-gray-400'>vikramthakur8838</a></li>
                        </ul>
                    </div>

                    <div className='flex items-center justify-start mb-4'>
                        <p className='mr-2'>
                            < FaLocationDot className='text-5xl bg-indigo-500 px-2 py-3 rounded-md' />
                        </p>
                        <ul>
                            <li className='text-xl font-medium text-indigo-500'>Address</li>
                            <li><a href="tel:+919608978903" className='text-sm font-normal text-gray-400'>Rajeev Nagar, Patna - 800024</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="basis-1/2 bg-[#272757] p-4 rounded-[10px]">
                <div className='flex justify-between mb-2 gap-5'>
                    <div className='basis-1/2'>
                        <label htmlFor="email" className='block mb-1'>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className='outline-2 focus:outline-indigo-600 bg-white py-2 rounded-[4px] placeholder-gray-400 text-black pl-2 w-full'
                            placeholder='Email' 
                        />
                    </div>
                    <div className='basis-1/2'>
                        <label htmlFor="name" className='block mb-1'>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className='outline-2 focus:outline-indigo-600 bg-white py-2 rounded-[4px] placeholder-gray-400 text-black pl-2 w-full' 
                            placeholder='Name'
                        />
                    </div>
                </div>
                <div className='w-full mb-2'>
                    <label htmlFor="phone" className='block mb-1'>Phone</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        className='outline-2 focus:outline-indigo-500 w-full py-2 pl-2 bg-white text-black rounded-[4px]' 
                        placeholder='Phone'
                    />
                </div>
                <div>
                    <label htmlFor="text" className='block mb-1'>Message</label>
                    <textarea 
                        name="text" 
                        id="text"
                        rows="4"
                        className='outline-2 focus:outline-indigo-500 w-full py-2 pl-2 bg-white text-black rounded-[4px]' 
                        placeholder='Message'
                    ></textarea>
                </div>
                <div>
                    <Button 
                        text="Submit"
                        className="w-[200px] mt-4"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact