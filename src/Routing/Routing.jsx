import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Certificates from '../pages/Certificates'
import Layout from '../pages/Layout'

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
            path='/certificates' 
            element={ <Certificates />} 
          />
        </Route>
      </Routes>
    </div>
  )
}

export default Routing