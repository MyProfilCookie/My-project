/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import Modal from './Modal'
import Profile from './Profile'


const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext)
    console.log(user)

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
        // faire un menu detail pour la navbar
        { id: 2, name: 'Contact', link: '/contact' },
        { id: 3, name: 'About', link: '/about' },
        { id: 4, name: 'Recettes', link: '/recettes' },

    ]



    return (
        <header className="fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-10000 py-4">

            <div className={`navbar bg-base-100 ${isSticky ? 'shadow-md bg-base-100 transition-all duration-300' : ''}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon icon={faBars} size="2xl" />
                        </div>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems.map(item => (
                                <li className="py-1 mt-3 mb-3" key={item.id}><NavLink to={item.link}>{item.name}</NavLink></li>
                            ))}

                        </ul>
                    </div>
                </div>
                    <a href='/'>
                        <img src={logo} alt="logo" style={{ width: '60px' }} className='navbar-start' />
                    </a>

                <div className="navbar-center hidden lg:flex px-4">
                    <ul className="menu menu-horizontal px-1 ">
                        {navItems.map(item => (
                            // faire une loupe en incluant le submenu
                            <li key={item.id}><NavLink to={item.link}>{item.name}</NavLink></li>
                        ))}
                        <li>
                            <details>
                                <summary>Recettes</summary>
                                <ul className="p-2">
                                    <NavLink to="/recettes"><li>Toutes</li></NavLink>
                                    <NavLink to="/recettes/populaires"><li>les plus populaires</li></NavLink>
                                    <NavLink to="/recettes/nouvelles"><li>Nouvelles recettes</li></NavLink>
                                    <NavLink to="/recettes/best"><li>Les meilleurs recettes</li></NavLink>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Profile user={user} /> :

                            <Modal />
                    }
                </div>
            </div>
        </header>
    )
}

export default Navbar