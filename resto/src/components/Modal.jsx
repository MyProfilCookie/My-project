/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {faCakeCandles} from '@fortawesome/free-solid-svg-icons'
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
                            <div className="modal-action">
                                <form className="card-body" method='dialog'>
                                    <h3 className="text-center font-bold "><FontAwesomeIcon icon={faCakeCandles} className='text-red hover-scale-110 transition duration-300' /> Se connecter</h3>
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
                                <div>
                                     <button onClick={closeModal} className="butn btn-circle btn-outline "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
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