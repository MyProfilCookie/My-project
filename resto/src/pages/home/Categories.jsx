
/* eslint-disable no-unused-vars */
import React from 'react'


function Categories() {
    const Category = [
        { id: 1, name: "Gourmandise", image: "./images/gourmandise.jpeg" },
        { id: 2, name: "Chocolat", image: "./images/chocolat.jpeg" },
        { id: 3, name: "Pains et viennoiserie", image: "./images/pain.jpeg" },
        { id: 4, name: "Fruits", image: "./images/fruits.jpeg" },
    ]
    return (
        <div className='section-container py-16'>
            <div className='text-center'>
                <p className='text-red uppercase tracking-wide font-medium text-lg'>Choisissez une catégorie</p>
                <h2 className='text-4xl md-text-5xl font-bold my-2 md-leading-snug leading-snug '>Nos recettes</h2>

            </div>

            <div className='flex flex-wrap gap-8 md-flex-col justify-around items-center mt-12'>
                {
                    Category.map((category) => {
                        return <div key={category.id} className=' shadow-lg rounded-md py-6 px-8 w-50 bg-white rounded-md mx-auto text-center cursor-pointer' >
                            <div className='w-64 mx-auto'>
                                <img className='rounded-md w-64' src={category.image} alt={category.name} />
                            </div>
                            <div className='mt-5 space-y-1 '>
                                <h5 className='text-center font-bold'>{category.name}</h5>
                                <button className='btn-primary px-8 py-3 font-semibold rounded-full'>Voir plus</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Categories
