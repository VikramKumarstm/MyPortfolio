import React from 'react'
import Button from './Button/Button'

function Project() {
  return (
    <div className='w-full h-full flex justify-center py-12 bg-[#272757] text-white'>
        <div className='w-[80%] flex flex-col'>
            <div className='mb-4'>
                <h1 className='text-3xl font-semibold'>Recent Projects</h1>
                <p className='w-[65px] h-[2px] bg-indigo-500 mb-6'></p>
                <p className='text-sm font-normal'>
                    I enjoy turning ideas into real applications. These projects reflect my learning 
                    journey, experimentation, and problem-solving while building practical, user-friendly 
                    solutions.
                </p>
            </div>
            <div className="sm:flex flex-wrap gap-y-5 justify-between">
                <div className='basis-[32%] sm:mb-0 mb-8'>
                    <div>
                        <img src="https://media.licdn.com/dms/image/v2/C4D12AQHqcEd3IXlhLQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1526236763388?e=2147483647&v=beta&t=zRTovIAbnLVS-dTkd9ysAprUybEVaY-71RmJvaDemeI" 
                        alt="project-img" 
                        className='rounded-xl'
                    />
                    </div>
                    <div>
                        <h1 className='mt-2 text-2xl font-semibold text-indigo-500'>E-Commerce Site</h1>
                        <p className='text-sm font-normal mb-2'>
                            A responsive e-commerce site with product listings, shopping cart, and smooth 
                            checkout for a seamless shopping experience.
                        </p>
                        <Button text='View Project' />
                    </div>
                </div>
                <div className='basis-[32%] sm:mb-0 mb-8'>
                    <div className="image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNytHbg5pT4doVOIZWF0J5YvptIdcp0JpKdzP7H70Pber_sds3RIreXp-mTi7O6SpZF3w&usqp=CAU" 
                        alt="project-img" 
                        className='rounded-xl'
                    />
                    </div>
                    <div>
                        <h1 className='mt-2 text-2xl font-semibold text-indigo-500'>Swiggy UI Clone</h1>
                        <p className='text-sm font-normal mb-2'>
                            A pixel-perfect Swiggy UI clone built with React, showcasing responsive 
                            design and front-end skills.
                        </p>
                        <Button text='View Project' />
                    </div>
                </div>
                <div className='basis-[32%] sm:mb-0 mb-8'> 
                    <div className="image">
                        <img src="https://i.ytimg.com/vi/56VjdqcdakQ/maxresdefault.jpg" 
                        alt="project-img"
                        className='rounded-xl'
                    />
                    </div>
                    <div className="content">
                        <h1 className='mt-2 text-2xl font-semibold text-indigo-500'>Pokedex App</h1>
                        <p  className='text-sm font-normal mb-2'>
                            A React-based Pokedex with search, detailed views, and navigation using 
                            Next/Prev buttons. Integrated APIs and optimized search performance.
                        </p>
                        <a href="https://pokemon-app-theta-sepia.vercel.app/" target="_blank" >
                            <Button text='View Project' />
                        </a>
                    </div>
                </div>
                <div className='basis-[32%] sm:mb-0 mb-8'> 
                    <div className="image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rN_ugT3NhvDGdKP-9Sc6l4Gioftbc6wnmg&s" 
                        alt="project-img"
                        className='rounded-xl'
                    />
                    </div>
                    <div className="content">
                        <h1 className='mt-2 text-2xl font-semibold text-indigo-500'>LMS</h1>
                        <p  className='text-sm font-normal mb-2'>
                            A full-stack LMS application built to handle course management, user 
                            authentication, progress tracking, and content delivery in a structured 
                            and scalable way.
                        </p>
                        <a href="https://pokemon-app-theta-sepia.vercel.app/" target="_blank" >
                            <Button text='View Project' />
                        </a>
                    </div>
                </div>
                <div className='basis-[32%] sm:mb-0 mb-8'> 
                    <div className="image">
                        <img src="https://www.jackcheng.com/content/images/2024/05/Bebop-Screenshots-1-1.png" 
                        alt="project-img"
                        className='rounded-xl'
                    />
                    </div>
                    <div className="content">
                        <h1 className='mt-2 text-2xl font-semibold text-indigo-500'>Note App</h1>
                        <p  className='text-sm font-normal mb-2'>
                            A notes application built to create, update, delete, and organize notes 
                            with fast performance and a user-friendly design.
                        </p>
                        <a href="https://pokemon-app-theta-sepia.vercel.app/" target="_blank" >
                            <Button text='View Project' />
                        </a>
                    </div>
                </div>
                <div className='basis-[32%] sm:mb-0 mb-8'> 
                    <div className="image">
                        <img src="https://cryptopro.app/wp-content/uploads/2020/08/crypto-pro-portfolio-tracker.png" 
                        alt="project-img"
                        className='rounded-xl'
                    />
                    </div>
                    <div className="content">
                        <h1 className='mt-2 text-2xl font-semibold text-indigo-500'>Crypto Tracker</h1>
                        <p  className='text-sm font-normal mb-2'>
                            A crypto tracker built to fetch and display real-time crypto market data, price updates, 
                            and trend analysis using external APIs.
                        </p>
                        <a href="https://crypto-project-coin-gecko-sigma.vercel.app/" target="_blank" >
                            <Button text='View Project' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full mt-5 text-right'>
                <Button text='View All Projects With Code...'/>
            </div>
        </div>
    </div>
  )
}

export default Project