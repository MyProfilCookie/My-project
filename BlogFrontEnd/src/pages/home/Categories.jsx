
/* eslint-disable no-unused-vars */
import React from 'react'


function Categories() {
    const Category = [
        { id: 1, name: "Gourmandise", image: "./images/gourmandise.jpeg" },
        { id: 2, name: "Chocolat", image: "./images/chocolat.jpeg" },
        { id: 3, name: "Pains et viennoiserie", image: "./images/pain.jpeg" },
        { id: 4, name: "Fruits", image: "./images/fruits.jpeg" },
    ];
    
    async function fetchCategories() {
        // Simule une requête asynchrone avec un délai de 1 seconde
        await new Promise(resolve => setTimeout(resolve, 500));
        
        
        return Category;
    }
    
    // Utilisation de la fonction asynchrone
    async function fetchData() {
        try {
            const categories = await fetchCategories();
            console.log(categories);
            // Utilisez les catégories récupérées ici
        } catch (error) {
            console.error('Une erreur est survenue :', error);
        }
    }
    
    // Appel de la fonction fetchData
    fetchData();
    return (
        <div className='section-container py-16 mb-20'>
            <div className='text-center'>
                <p className='text-red uppercase tracking-wide font-medium text-lg'>Choisissez une catégorie</p>
                <h2 className='text-4xl md-text-5xl font-bold my-2 md-leading-snug leading-snug '>Nos recettes</h2>

            </div>

            <div className='flex flex-wrap gap-4 md-flex-col justify-around items-center mt-12'>
                {
                    Category.map((category) => {
                        return <div key={category.id} className=' shadow-lg rounded-md py-6 w-64 bg-white rounded-md mx-auto text-center cursor-pointer' >
                            <div className='w-64 mx-auto'>
                                <img className='w-64' src={category.image} alt={category.name} />
                            </div>
                            <div className='mt-5 space-y-1 '>
                                <h5 className='text-center font-bold'>{category.name}</h5>
                                <button className='btn-primary px-8 py-3 font-semibold rounded-full mt-10'>Voir plus</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Categories
