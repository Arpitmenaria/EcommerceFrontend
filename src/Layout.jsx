import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Blog/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <main>
            <Outlet/>
        </main>
        <Footer />

    </div>
  )
}

export default Layout