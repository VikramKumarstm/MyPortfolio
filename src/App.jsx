import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import { CiMenuBurger } from "react-icons/ci";
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Skill from './components/Skill';


function App() {
  
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      < Header />
      < Hero />
      < About />
      < Service />
      < Skill />
    </>
    
  )
}

export default App
