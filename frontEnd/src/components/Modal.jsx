/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthProvider'

function Modal() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    
    
    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        // console.log(email, password)
        login(email, password).then((result) => {
            const user = result.user;
            alert('Connexion effectuée avec succès!');
            setIsModalOpen(false);
            // on ferme la modal
            navigate(from, { replace: true }); //  redirection vers la page d’accueil après connexion '/')
        }
    ).catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Email ou mot de passe incorrect")
    })
    
}
const handleLogin = () =>{
    signUpWithGmail().then((result) => {
        const user = result.user;
        alert('Connexion avec Google effectuée avec succès!')
        // on ferme la modal
        setIsModalOpen(false);
        navigate(from, { replace: true });
    }).catch((error) => {
        console.log(error)
    });
}
const {signUpWithGmail, login} = useContext(AuthContext)
const [errorMessage, setErrorMessage] = useState('')

//  redirection vers la page d'accueil après connexion
const location = useLocation()
const navigate = useNavigate()
//  redirection vers la page d'accueil après connexion
const from = location.state?.from?.pathname || '/'



    const [isModalOpen, setIsModalOpen] = useState();
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // google connexion 
   

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
                            <div className="modal-action flex flex-col justify-center mt-0 relative">
                                <form
                                    onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>
                                    <h3 className="font-bold flex justify-center align-center 
                                    "><img src="./logo.svg" alt="logo" className="w-14" />Se connecter</h3>
                                    <button onClick={closeModal} className="bton cursor-pointer hover-scale-110 buton-circle absolute top-0 right-0">x</button>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required
                                            {...register('email', { required: true })} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required
                                            {...register('password', { required: true })} />
                                        <label className="label mt-2">
                                            <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                                        </label>
                                    </div>
                                    {
                                        errorMessage ?
                                        <span className="error text-red font-bold">{errorMessage}</span> : ""
                                    }   
                                 

                                    <div className="form-control mt-6">
                                        <input type='submit' value='Login' className="btn btn-primary mx-auto" />
                                    </div>
                                    <div className="form-control mx-auto">
                                        <p className="text-center">Vous n’avez pas de compte ? <Link to='/register' className='underline text-red font-bold mt-2'>S’inscrire</Link></p>
                                    </div>
                                </form>
                                <div className='flex justify-center'>
                                    <button className="butn btn-circle bton-outline-google hover-scale-110 mx-1" onClick={handleLogin}>
                                        <FontAwesomeIcon icon={faGoogle} size='2xl' />
                                    </button>
                                    <button className="butn btn-circle bton-outline-instagram hover-scale-110 mx-1">
                                        <FontAwesomeIcon icon={faInstagram} size='2xl' />
                                    </button>
                                    <button className="butn btn-circle bton-outline-facebook hover-scale-110 mx-1 ">
                                        <FontAwesomeIcon icon={faFacebook} size='2xl' />
                                    </button>
                                    <button className="butn btn-circle bton-outline-tiktok hover-scale-110 mx-1 ">
                                        <FontAwesomeIcon icon={faTiktok} size='2xl' />
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