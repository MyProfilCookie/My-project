/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faFacebook, faTiktok} from '@fortawesome/free-brands-svg-icons'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(true);

    const onSubmit = (data) => {
        console.log(data); // Ici, vous pouvez envoyer les données du formulaire à votre backend
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            {isModalOpen && (

            <div className="modal">
                <div className="modal-box relative">
                    <button className="bton cursor-pointer hover-scale-110 buton-circle absolute top-2 right-2" onClick={closeModal}><Link to="/">X</Link></button>
                    <h2 className="font-bold mb-10 text-center text-3xl">Inscription</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label htmlFor="email" className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" id="email" className="input input-bordered" {...register('email', { required: true })} />
                            {errors.email && <span className="error">Ce champ est requis.</span>}
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" className="label">
                                <span className="label-text">Mot de passe</span>
                            </label>
                            <input type="password" id="password" className="input input-bordered" {...register('password', { required: true })} />
                            {errors.password && <span className="error">Ce champ est requis.</span>}
                        </div>
                        <button type="submit" className="btn btn-primary">S’inscrire</button>
                    </form>
                    <p>Vous avez déjà un compte ?</p>
                    <div className='flex justify-center mb-10'>
                        <Modal />
                        <button className="btn-primary-login rounded-full button-modal link"><Link to="/"><FontAwesomeIcon icon={faHouseUser}  className='text-white'/></Link></button>
                    </div>
                    <div className='flex justify-center'>
                        <button className="butn btn-circle bton-outline-google hover-scale-110 mx-1 ">
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
            )}
        </div>
    )
}

export default Register
