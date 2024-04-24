/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingScreen from '../components/LoadingScreen'
const Main = () => {
    const { loading } = useContext(AuthContext);
    return (
        <div className='bg-chocolat-blanc'>
            {
                loading ? <LoadingScreen /> :
                    <div><Navbar />

                        <Outlet />
                        <Footer /></div>

            }

        </div>
    )
}

export default Main

