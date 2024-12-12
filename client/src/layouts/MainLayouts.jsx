import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer'

export const MainLayouts = () => {
  return (
    <div >
       <Navbar></Navbar>
       <div>
        <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}
