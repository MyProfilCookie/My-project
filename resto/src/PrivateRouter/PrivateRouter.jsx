/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useContext, } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import {useLocation, Navigate  } from "react-router-dom"
import LoadingScreen from '../components/LoadingScreen';

function PrivateRouter({children}) {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();

    

    if(loading) {
        return (
        <LoadingScreen />
        )
    }
    if(user) {
        return children
    }
  return (
   <Navigate to="/register" state={{from: location}} replace />
  )
}

export default PrivateRouter
