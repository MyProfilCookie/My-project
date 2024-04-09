/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
            window.addEventListener('scroll', handleScroll);
            return () => { window.removeEventListener('scroll', handleScroll); };
        };
        handleScroll();
    }, []);



    const navItems = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Recettes', link: '/recettes' },
        { id: 3, name: 'Contact', link: '/contact' },
    ]
    return (
        <header className="max-w-screen-2xl xl-px-2 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-10000 py-4">

            <div className={`navbar bg-base-100 ${isSticky ? 'shadow-md bg-base-100 transition-all duration-300' : ''}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon icon={faBars} width={200} />
                        </div>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems.map(item => (
                                <li key={item.id}><NavLink to={item.link}>{item.name}</NavLink></li>
                            ))}
                        </ul>
                    </div>
                    <a href='/'>
                        <img src={logo} alt="logo" width={30} />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex px-4">
                    <ul className="menu menu-horizontal px-1 ">
                    {navItems.map(item => (
                                <li key={item.id}><button className="btn btn-circle uppercase btn-ghost"><NavLink to={item.link}>{item.name}</NavLink></button></li>
                            ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/login" className="btn btn-ghost btn-circle"><FontAwesomeIcon icon={faUserPlus} /></NavLink>
                    <NavLink to="/login" className="btn btn-ghost btn-circle"><FontAwesomeIcon icon={faUser} /></NavLink>
                    <NavLink to="/login" className="btn btn-ghost btn-circle"><FontAwesomeIcon icon={faUserMinus} /></NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar