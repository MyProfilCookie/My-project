/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recettes from '../../../public/recettes'; // Assurez-vous que le chemin est correct

function RecetteDetail() {
    const { id } = useParams();
    const [recette, setRecette] = useState(null);

    useEffect(() => {
        const recetteId = parseInt(id, 10);
        const foundRecette = recettes.find(r => r.id === recetteId);
        setRecette(foundRecette);
    }, [id]);

    if (!recette) {
        return <div>Recette introuvable.</div>;
    }

    return (
        <div className='recette-detail'>
            <div className="header">
                <h1 className='title'>{recette.titre}</h1>
            </div>
            <div className="left-column">
                <img src={recette.image} alt={recette.titre} />
                <div className="details">
                    <p>Temps de préparation : {recette.temps_preparation}</p>
                    <p>Temps de cuisson : {recette.temps_cuisson}</p>
                    <p>Difficulté : {recette.difficulte}</p>
                </div>
            </div>
            <div className="right-column">
                <div className="ingredients">
                    <h2>Ingrédients</h2>
                    <ul>
                        {recette.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="instructions">
                    <h3>Étape par étape</h3>
                    <ol>
                        {recette.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecetteDetail;