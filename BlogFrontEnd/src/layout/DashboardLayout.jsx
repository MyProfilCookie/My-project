/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faGaugeHigh, faUserGroup, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { AuthContext } from '../contexts/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import logo from '/logo.svg'

function DashboardLayout() {
    const { logOut } = useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState();
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        logOut().then(() => {
            alert('Vous êtes déconnecté')
            setIsModalOpen(false);
            navigate(from, { replace: true }); //  redirection vers la page 
        }).catch((error) => { console.log(error) })
    }
    //  redirection vers la page d'accueil après connexion
    const location = useLocation()
    const navigate = useNavigate()
    //  redirection vers la page d'accueil après connexion
    const from = location.state?.from?.pathname || '/'
    return (
        <div>
            <div className="drawer-2 drawer-end h-full z-100">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle-2" />
                <label htmlFor="my-drawer-2" className="close-drawer-button"><IoMdCloseCircleOutline /></label>
                <div className="drawer-content-2">
                    <div className="flex items-center justify-between mx-4">
                        <label htmlFor="my-drawer-2" className="drawer-button btn btn-primary btn-ghost btn-circle avatar-profile lg-hidden ">
                            <MdDashboardCustomize className="w-32"/>
                        </label>
                        <button className='btn rounded-full px-6 bg-sunset-cake lg-hidden' onClick={handleLogout}>Logout</button>
                    </div>
                    <Outlet />
                </div>
                <div className="hidden drawer-side-2">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay-2"></label>
                    <ul className="menu-drawer-2 p-4 w-80 min-h-full">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="/profile" className='flex justify-start mb-3 align-center'>
                                <img src={logo} className="w-20" alt="logo" />
                                <span className="badge badge-accent">Admin</span>
                            </Link>
                        </li>
                        <li className='mb-1 '>
                            <Link to="/dashboard"><FontAwesomeIcon icon={faGaugeHigh} className='mr-2' /> Dashboard</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to="/dashboard/users"><FontAwesomeIcon icon={faUserGroup} className='mr-2' /> Tous les utilisateurs</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to="/dashboard"><MdFormatListBulletedAdd className='mr-2' /> Ajout d'une recette</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to="/dashboard/"><FaRegEdit className='mr-2' />
                                Modification d'une recette</Link>
                        </li>
                        <li className='mb-1'>
                            <Link to="/dashboard/users"><LiaUserEditSolid className='mr-2' /> Modification du rôle d'un utilisateur</Link>
                        </li>
                        <li className='mb-1'>
                            <a onClick={handleLogout} ><FontAwesomeIcon icon={faRightFromBracket} className='mr-2' /> Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout