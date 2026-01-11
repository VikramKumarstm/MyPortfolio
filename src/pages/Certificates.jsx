import React from 'react'
import css from '/assets/certificates/Hackerrank_CSS.png'
import backend from '/assets/certificates/PW_backend.png'
import webDesign from '/assets/certificates/Udemy_webDesign.jpg'
import frontend from '/assets/certificates/Udemy_frontend.jpg'
import msOffice from '/assets/certificates/be10x.png'
import python from '/assets/certificates/Cimage_Python.png'
import ncat from '/assets/certificates/NCAT.png'
import PWConquest from '/assets/certificates/PW_Conquest.png'
import CimageConquest from '/assets/certificates/Cimage_codeCombat.jpeg'
import Hacking from '/assets/certificates/BHU_Hacking.jpeg'
import Cloud from '/assets/certificates/BHU_Cloud.jpeg'
import Fish from '/assets/certificates/Fish.jpeg'

function Certificates() {
  return (
    <div className='bg-[#0F0E47] pb-6'>
        <div className='h-[70vh] w-full relative'>
            <img 
                src="https://www.quickanddirtytips.com/wp-content/uploads/2021/05/Bachelors-Degree-or-Bachelors-Degree.png" 
                alt="" 
                className='h-full w-full'
            />
            <div className='absolute top-50 left-0 right-0 mx-auto w-[18rem]'>
                <h2 className='text-4xl font-bold text-white'>Certificates</h2>
            </div>
        </div>
        <div className='pt-5 h-full'>
            <div className='sm:flex sm:flex-wrap sm:justify-between sm:gap-y-5 w-[80%] mx-auto h-full'>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={css}
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={backend}
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={webDesign} 
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={frontend}
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={msOffice} 
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={python} 
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={ncat}
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={CimageConquest}
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={Hacking}
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={Cloud}
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={Fish}
                        alt="" 
                        className='rounded-lg blur-sm'
                    />
                </div>
                <div className='sm:basis-[32%] transition-transform duration-300 hover:scale-[2] pb-3'>
                    <img 
                        src={PWConquest}
                        alt="" 
                        className='rounded-lg'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificates