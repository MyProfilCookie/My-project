/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

function Profile({ user }) {
    return (
        <div>
            <div className="drawer drawer-end z-100">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button bton-ghost btn-circle avatar ">
                    <div className="w-10 rounded-full">
                           {user.photoURL? <img src={user.photoURL} alt={user.displayName} /> : 
                        //    dans le cas où l'utilisateur n'a pas de photo de profil, on affiche une icône par défaut
                           <FontAwesomeIcon icon={faUserAstronaut} size='2xl' style={{height: '2.5rem'}}/>}
                        </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu-drawer p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Profile</a></li>
                        <li><a>Mes recettes</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile