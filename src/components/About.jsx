import React from 'react'
import myImage from '../assets/images/vikram-port.png'
import Button from './Button/Button'

export default function About() {
  return (
    <div>
        <div className='w-full h-full sm:h-screen bg-[#0F0E47] flex justify-center'>

            <div className='w-[80%] sm:flex items-center text-white'>
                <div className="basis-[40%] pt-8 mb-8 sm:mb-0 sm:pt-0">
                    <img src={myImage} alt="Vikram" className='border-2 rounded-2xl border-indigo-500 h-[450px]'/>
                </div>
                <div className="basis-[60%] pl-6 sm:pb-6">
                    <h3 className='text-xl font-semibold text-indigo-600'>Discover</h3>
                    <h1 className='text-3xl font-semibold'>About Me</h1>
                    <p className='w-[50px] h-[2px] bg-indigo-500 rounded-2xl mb-8'></p>
                    <p className='text-sm font-normal pb-8'>
                        I am a passionate MERN stack developer with hands-on experience in building 
                        full-stack applications. Currently, I have received an offer letter from Tata 
                        Consultancy Services (TCS), reflecting my dedication, learning, and growth in 
                        the IT field.
                    </p>
                    <div className="flex border-2 border-indigo-500 rounded-xl px-4 py-4 mb-6">
                        <ul className='pr-8'>
                            <li className='text-gray-400'><span className='text-white'>Name:</span> Vikram Kumar</li>
                            <li className='text-gray-400'><span className='text-white'>Phone:</span> +91 960 897-8903</li>
                            <li className='text-gray-400'><span className='text-white'>Experience:</span> 1 Years</li>
                            <li className='text-gray-400'><span className='text-white'>Github:</span> <a href="https://github.com/VikramKumarstm">vikramkumarstm</a></li>
                        </ul>
                        <ul>
                            <li className='text-gray-400'><span className='text-white'>Age:</span> 21</li>
                            <li className='text-gray-400'><span className='text-white'>Address:</span> Rajeev Nagar, Patna, 800024</li>
                            <li className='text-gray-400'><span className='text-white'>Freelance:</span> Available</li>
                            <li className='text-gray-400'><span className='text-white'>Worked :</span> OriginKonnect, ExporterAI, BTG</li>
                        </ul>
                    </div>

                    < Button text="Download CV" />
                </div>
            </div>

        </div>
    </div>
  )
}
