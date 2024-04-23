/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider'

function UpdateProfile() {
    const { updateUserProfile, user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    //  redirection vers la page d'accueil après connexion
    const from = location.state?.from?.pathname || '/'
    //  redirection vers la page d'accueil après connexion


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const name = data.name
        const photoURL = data.photoURL
        updateUserProfile(name, photoURL).then(() => {
            alert('Mise à jour effectuée avec succès!')
            navigate(from, { replace: true });

        }).catch((error) => {
            const errorMessage = error.message;
            alert("Email ou mot de passe incorrect")
        })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 section-container">

                <div className="card hero-content flex-col shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form className="card-body rounded-2xl " onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-3xl text-center font-bold mb-8">Mise à jour de ton profil</h3>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ton ancien email</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Ton email actuel" 
                            className="input input-bordered" 
                            defaultValue={user?.email} 
                            readOnly />
                    </div>
                        <div className="form-control max-w-sm">
                            <label className="label">
                                <span className="label-text">Ta nouvelle adresse mail</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="ton nouveau pseudo" className="input input-bordered" required />
                        </div>
                        <div className="form-control max-w-sm">
                            <label className="label">
                                <span className="label-text">Upload ta photo</span>
                            </label>
                            <input {...register("photoURL")} type="text" placeholder="photoUrl" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Enregistrer votre profil</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile