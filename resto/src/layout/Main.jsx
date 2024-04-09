/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Main = () => {
    return (
        <div className='b-gradient-to-b'>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />

        </div>
    )
}

export default Main

