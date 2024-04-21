/* eslint-disable no-unused-vars */
import recettes from '../../../public/recettes'; './recettes.json'; // Assure-toi que le chemin est correct et que les données sont exportées correctement

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecetteDetail() {
    const { id } = useParams(); // Extrait l'ID à partir des paramètres de l'URL
    const [recette, setRecette] = useState(null);

    useEffect(() => {
        // Convertis l'ID en nombre car l'ID dans useParams est une chaîne
        const recetteId = parseInt(id, 10);
        // Trouve la recette qui correspond à l'ID
        const foundRecette = recettes.find(r => r.id === recetteId);
        setRecette(foundRecette);
    }, [id]);

    if (!recette) {
        return <div>Recette introuvable.</div>;
    }

    return (
        <div className='container mx-auto px-4 xl-px-24 max-w-screen-2xl b-gradient-to-b'>
            <article className='py-36 flex flex-col items-center justify-center gap-8'>
                <h1>{recette.titre}</h1>
                <img src={recette.image} alt={recette.titre} className='w-full md-w-96 shadow-2xl' />
                <h2 className='text-2xl font-bold my-2'>Ingrédients</h2>
                <ul className='list-disc list-inside'>
                    {recette.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3 className='text-2xl font-bold my-2'>Étape par étape</h3>
                <ol className='list-decimal list-inside'>
                    {recette.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
                <p>Temps de préparation : {recette.temps_preparation}</p>
                <p>Temps de cuisson : {recette.temps_cuisson}</p>
                <p>Difficulté : {recette.difficulte}</p>
                <p>Catégorie : {recette.category}</p>
            </article>
        </div>
    );
}

export default RecetteDetail;