import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
        < Hero />
        < About />
        < Service />
        < Skill />
        < Project />
        < Contact />
    </>
  )
}

export default Home