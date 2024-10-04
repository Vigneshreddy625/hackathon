import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="flex flex-col">
        <div className="">
        <Header/>
        </div>
        <div className="min-h-screen bg-gradient-to-r from-black to-indigo-900 text-white">
        <Outlet/>
        </div>
        <div className="">
        <Footer/>
        </div>
    </div>
  )
}

export default Layout