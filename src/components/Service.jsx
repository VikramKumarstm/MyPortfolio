import React from 'react'
import { DiAndroid } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbApiApp } from "react-icons/tb";
import { SiAuthelia } from "react-icons/si";






function Service() {
  return (
    <div className='w-full h-full flex justify-center bg-[#272757] text-white'>
        <div className='w-[80%] h-full py-16'>
            <div className="txt">
                <h1 className='text-3xl font-semibold'>What I Do</h1>
                <p className='w-[75px] h-[2px] bg-indigo-500 rounded-2xl mb-8'></p>
                <em className='text-gray-500 font-semibold'>"Bringing innovation and efficiency to your digital projects."</em>
                <p className='text-sm font-normal my-2'>
                    As a passionate web developer, I create solutions that fit your needs. Whether you need 
                    a beautiful website, a strong backend system, or a complete web application, I use my  
                    skills and creativity to deliver the best results.
                </p>
                <p className='text-sm font-normal mb-2'>
                    My goal is to build high-quality, user-friendly websites and applications that help 
                    businesses grow. I focus on designing attractive interfaces and building secure and 
                    reliable backends, ensuring your project is handled with care and attention.
                </p>
                <em className='text-gray-500 font-semibold'>"Let’s turn your ideas into amazing digital experiences!"</em>
            </div>
            <div className="sm:flex sm:justify-between flex-wrap w-full mt-12">
                <div className='sm:w-[32%] border-2 border-indigo-500 rounded-xl px-4 py-4 mb-4 text-center'>
                    <div className='w-full text-6xl flex justify-center mb-4'>
                        < DiAndroid />
                    </div>
                    <div className="content">
                        <h1 className='text-2xl text-indigo-600 font-semibold mb-2'>IT Solution</h1>
                        <p className='text-sm font-normal'>
                            I provide complete IT solutions to help businesses and individuals go digital. From 
                            building websites to managing online systems, I focus on creating reliable and 
                            effective solutions that make technology easy to use.
                        </p>
                    </div>
                </div>

                <div className='sm:w-[32%] border-2 border-indigo-500 rounded-xl px-4 py-4 text-center mb-4'>
                    <div className='w-full text-6xl flex justify-center mb-4'>
                        < FaReact />
                    </div>
                    <div className="content">
                        <h1 className='text-2xl text-indigo-600 font-semibold mb-2'>Frontend Development</h1>
                        <p className='text-sm font-normal'>
                            I design and build clean, responsive, and user-friendly interfaces using modern tools 
                            like HTML, CSS, JavaScript, and React. My goal is to make websites look great and work 
                            smoothly on all devices.
                        </p>
                    </div>
                </div>

                <div className='sm:w-[32%] border-2 border-indigo-500 rounded-xl px-4 py-4 text-center mb-4'>
                    <div className="w-full text-6xl flex justify-center mb-4">
                        < FaDatabase />
                    </div>
                    <div className="content">
                        <h1 className='text-2xl text-indigo-600 font-semibold mb-2'>Backend Development</h1>
                        <p className='text-sm font-normal'>
                            I create secure and scalable server-side systems that power applications from behind 
                            the scenes. Using Node.js, Express, and databases like MySQL or MongoDB, I make sure 
                            everything runs fast and reliably.
                        </p>
                    </div>
                </div>

                <div className='sm:w-[32%] border-2 border-indigo-500 rounded-xl px-4 py-4 text-center mb-4' >
                    <div className="w-full text-6xl flex justify-center mb-4">
                        < FaNodeJs />
                    </div>
                    <div className="content">
                        <h1 className='text-2xl text-indigo-600 font-semibold mb-2'>Full Stack Development</h1>
                        <p className='text-sm font-normal'>
                            With knowledge of both frontend and backend, I build complete web applications from 
                            start to finish. This means I can handle everything—from the design users see to the 
                            logic that works in the background.
                        </p>
                    </div>
                </div>

                <div className='sm:w-[32%] border-2 border-indigo-500 rounded-xl px-4 py-4 text-center mb-4'>
                    <div className="w-full text-6xl flex justify-center mb-4">
                        < TbApiApp />
                    </div>
                    <div className="content">
                        <h1 className='text-2xl text-indigo-600 font-semibold mb-2'>API Development</h1>
                        <p className='text-sm font-normal'>
                            I develop APIs that connect different systems and make applications more powerful. 
                            This helps apps share data smoothly and integrate with third-party services.
                        </p>
                    </div>
                </div>

                <div className='sm:w-[32%] border-2 border-indigo-500 rounded-xl px-4 py-4 text-center mb-4'>
                    <div className="w-full text-6xl flex justify-center mb-4">
                        < SiAuthelia />
                    </div>
                    <div className="content">
                        <h1 className='text-2xl text-indigo-600 font-semibold mb-2'>Authentication</h1>
                        <p className='text-sm font-normal'>
                            I implement secure login and authentication systems so users can safely access applications. 
                            From basic login setups to advanced features, I make sure data and accounts remain protected.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Service