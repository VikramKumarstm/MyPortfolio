import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        < Hero />
        < About />
        < Service />
        < Skill />
        < Project />
        < Contact />
        < Footer />
    </>
  )
}

export default Home