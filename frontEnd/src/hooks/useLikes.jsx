import { useState } from 'react';

function useLikes() {
  const [likes, setLikes] = useState({});

  // Fonction pour ajouter un like à une recette
  const addLike = (recetteId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [recetteId]: prevLikes[recetteId] ? prevLikes[recetteId] + 1 : 1,
    }));
  };

  // Fonction pour supprimer un like d'une recette
  const removeLike = (recetteId) => {
    if (likes[recetteId]) {
      setLikes((prevLikes) => {
        const updatedLikes = { ...prevLikes };
        delete updatedLikes[recetteId];
        return updatedLikes;
      });
    }
  };

  // Fonction pour vérifier si une recette est likée
  const isLiked = (recetteId) => !!likes[recetteId];

  // Fonction pour récupérer le nombre total de likes d'une recette
  const getLikesCount = (recetteId) => likes[recetteId] || 0;

  return {
    likes,
    addLike,
    removeLike,
    isLiked,
    getLikesCount,
  };
}

export default useLikes;