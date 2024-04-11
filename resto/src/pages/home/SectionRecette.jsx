/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function SectionRecette() {
    return (
        <div className='section-container'>
            <div className='flex md-flex-col-reverse justify-between items-center gap-12' >
                <div className='md-w-half px-4 sd-w-full'>
                    <img src='./images/section2.jpeg' alt="banner" className='cover rounded-2xl shadow-lg w-150 md-w-full ' />
                </div>
                <div className='md-w-half px-4 sd-w-full'>
                    <div className='text-left md-w-4-5'>
                        <p className='subtitle text-red'>Notre recette <Link className='text-primary' to='/recette'> <FontAwesomeIcon icon={faCookieBite} className='hover-scale-110 transition duration-300 text-red' /></Link></p>
                        <p className='title'>Découvrez la recette préférée de nos chefs</p>
                        <blockquote className='my-5 text-secondary text-lg leading-30  '>
                            ❝ Avec une façon très gourmande j'arrive à manger de la viennoiserie et de la chocolat au moment parfait sans s’ennuyer. ❞
                        </blockquote>
                        <div className='flex justify-between items-center'>

                        </div>

                    </div>
                    <div className='flex gap-4 flex-wrap'>

                        <div className="avatar-group -space-x-6 rtl-space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className='space-0'>
                            <h5 className='text-lg font-semibold'>Avis de nos petits chefs</h5>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faStar} className='hover-scale-110 transition duration-300 text-yellow' />
                                <span className='font-medium'>4.6</span> <span className='text-secondary'>(125 avis)</span>
                            </div>
                        </div>
                    </div>
                    <Link to='/recettes' className='btn-primary px-8 py-3 font-semibold rounded-full mt-12 hover-scale-110 transition duration-300'>Voir plus</Link>
                </div>
            </div>
        </div>
    )
}

export default SectionRecette
