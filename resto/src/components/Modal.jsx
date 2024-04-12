/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {faCakeCandles} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Modal() {
    const [isModalOpen, setIsModalOpen] = useState();
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <button
                onClick={openModal}
                className='btn-primary-login rounded-full button-modal'
            >
                <FontAwesomeIcon icon={faUser} /> Login
            </button>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-box">
                            <div className="modal-action flex flex-col justify-center mt-0">
                                <form className="card-body" method='dialog'>
                                    <h3 className="font-bold flex justify-center align-center"><img src="./logo.svg" alt="logo" className="w-14" />Se connecter</h3>
                                    {/* <button onClick={closeModal} className="btn btn-close">Close</button> */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label mt-2">
                                            <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type='submit' value='Login' className="btn btn-primary mx-auto"/>
                                    </div>
                                    <div className="form-control mx-auto">
                                        <p className="text-center">Vous n’avez pas de compte ? <Link to='/register' className='underline text-red font-bold mt-2'>S’inscrire</Link></p>
                                    </div>
                                </form>
                                <div className='flex justify-center mx-4'>
                                    <button className="butn btn-circle btn-outline-google ">
                                    <FontAwesomeIcon icon={faGoogle} size='xl' />    
                                    </button>
                                    <button className="butn btn-circle btn-outline-git ">
                                    <FontAwesomeIcon icon={faGithubAlt} size='2xl' />    
                                    </button>
                                    <button className="butn btn-circle btn-outline-facebook ">
                                    <FontAwesomeIcon icon={faFacebook} size='2xl' />   
                                    </button>
                                    <button className="butn btn-circle btn-outline-twitter ">
                                    <FontAwesomeIcon icon={faXTwitter} size='2xl' />    
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Modal