import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Certificates from '../pages/Certificates'
import Layout from '../pages/Layout'
import About from '../components/About'
import Service from '../components/Service'
import Contact from '../components/Contact'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route 
            index
            element={ <Home />} 
          />
          <Route 
            path='/about' 
            element={ <About />} 
          />
          <Route 
            path='/services' 
            element={ <Service />} 
          />
          <Route 
            path='/certificates' 
            element={ <Certificates />} 
          />
        </Route>
      </Routes>
    </div>
  )
}

export default Routing