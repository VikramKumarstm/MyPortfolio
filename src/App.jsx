import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import { CiMenuBurger } from "react-icons/ci";


function App() {
  
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className='bg-purple-500'>
      <div className="h-16 flex items-center justify-between">
        {/* Logo */}
        <div className='text-3xl text-white font-bold px-4'>Logo</div>

        {/* navigation buttons for desktop */}
        <div className='hidden sm:block'>
          <a href="#" className='text-gray-100 text-lg px-4'>Home</a>
          <a href="#" className='text-gray-100 text-lg px-4'>About</a>
          <a href="#" className='text-gray-100 text-lg px-4'>Services</a>
          <a href="#" className='text-gray-100 text-lg px-4'>Certificate</a>
          <a href="#" className='text-gray-100 text-lg px-4'>Contact</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className='block sm:hidden px-4 text-3xl text-white'>
          <CiMenuBurger />
        </button>
      </div>
      {/* navigation buttons for mobile */}
      <div className={` ${isOpen ? "block" : "hidden"} block sm:hidden bg-gray-100 space-y-2 pb-3`}>
        <a href="#" className='text-gray-600 text-lg px-4 block'>Home</a>
        <a href="#" className='text-gray-600 text-lg px-4 block'>About</a>
        <a href="#" className='text-gray-600 text-lg px-4 block'>Services</a>
        <a href="#" className='text-gray-600 text-lg px-4 block'>Certificate</a>
        <a href="#" className='text-gray-600 text-lg px-4 block'>Contact</a>
      </div>
    </nav>
  )
}

export default App
