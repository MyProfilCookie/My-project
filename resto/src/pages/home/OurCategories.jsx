/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons'
import { faCheese } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faBreadSlice} />
// <FontAwesomeIcon icon={faStrawberry} />
// <FontAwesomeIcon icon={faCheese} />



const categorieLists = [
    { id: 1, title: "Chocolat", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: <FontAwesomeIcon icon={faMugHot} size='2xl'className='text-red hover-scale-110 transition duration-300' /> },
    { id: 2, title: "Gourmandise", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: <FontAwesomeIcon icon={faCheese} size='2xl'className='text-red hover-scale-110 transition duration-300' /> },
    { id: 3, title: "Fruits rouges", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: <FontAwesomeIcon icon={faAppleWhole} size='2xl'className='text-red hover-scale-110 transition duration-300' /> },
    { id: 4, title: "Pains et viennoiseries", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: <FontAwesomeIcon icon={faBreadSlice} size='2xl'className='text-red hover-scale-110 transition duration-300' /> },
]
function OurCategories() {
    return (
        <div className='section-container my-16'>
            <div className='flex md-flex-col-reverse justify-between items-center gap-20 md-gap-0'>
                <div className='md-w-half px-8 sd-w-full'>
                    <div className='text-left md-w-4-5'>
                        <p className='subtitle text-red'>Rejoingez nous pour devenir aussi des petits chefs <Link className='text-primary' to='/recette'> <FontAwesomeIcon icon={faKitchenSet} className='hover-scale-110 transition duration-300 text-red' /></Link></p>
                        <p className='title'>Découvrez la recette préférée de nos chefs</p>
                        <p className='my-5 text-secondary text-lg leading-30  '>
                            Votre site est composé de plusieurs catégories et de nombreuses recettes. Vous pouvez trouver la recette qui vous convient le plus. Vous pouvez également consulter les avis des autres utilisateurs pour vous aider à choisir la recette qui vous convient le mieux.
                        </p>
                        <Link to="/register" className='btn-primary px-8 py-3 font-semibold rounded-full mt-12 hover-scale-110 transition duration-300'><button type='button' className='btn btn-primary'>S'inscrire</button></Link>
                    </div>
                </div>
                <div className='md-w-half px-8 sd-w-full'>
                    <div className='grid grid-cols-2 md-grid-cols-4 gap-8'>
                        {
                            categorieLists.map((item, index) => {
                                return (
                                    <div key={index} className='shadow-lg p-6 rounded-2xl flex gap-4 px-4 py-5 text-center space-y-2 cursor-pointer hover-scale-110 duration-400 transition-all'>
                                        <div className='w-20 mx-auto '>
                                            {item.image}
                                        </div>
                                        <div>
                                            <h5 className='text-lg font-semibold pt-3 '>{item.title}</h5>
                                            <p className='text-secondary'>{item.des}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>


            </div>
        </div>
    )
}

export default OurCategories