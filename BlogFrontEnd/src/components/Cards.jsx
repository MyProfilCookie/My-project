/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function Cards({ item }) {
    const {titre, image, difficulte, category, _id } = item;

    const [isFavorite, setIsFavorite] = useState(false);
    const handleClick = () => {
        setIsFavorite(!isFavorite);
        console.log(isFavorite);

    };

    return (
        <div className="slider-container">
            <div className="card w-72 h-100 mx-auto md-w-48 md-mx-auto bg-base-100 shadow-xl p-5 m-12 relative transition duration-300 ease-in-out gap-3 ">
                <div className={`gap-1 absolute top-2 right-4 p-4 bg-cyan-500 z-10 heartState ${isFavorite ? 'text-red' : 'text-white'}`} onClick={handleClick}>
                    <FontAwesomeIcon icon={faHeart}  className='absolute top-2 left-2 m-4 z-10000 cursor-pointer transition-all duration-300 font-size-24' size="2xl"/>
                </div>
                <Link to={`/recettes/${item.id}`}>
                    <figure className="w-48">
                        <img src={item.image} alt="Shoes" className="w-full rounded-full shadow-2xl hover-scale-110 transition duration-300" style={{ width: '100%', height: '100%' }} />
                    </figure>
                </Link>
                <div className="card-body-cards">
                    <Link to={`/recettes/${item.id}`} className='mx-auto'><h3 className="card-title text-xl">{item.titre}</h3></Link>
                    {/* slice sur la description */}
                    {/* <p> {item.description.slice(0, 200)}... </p> */}
                    <p>{item.description}</p>

                    <div className="card-actions  h-full justify-between items-center mt-4">
                        <p className='font-semibold '>
                            {item.difficulte === 'facile' && <span className='badge badge-primary'>{item.difficulte}</span>}
                            {item.difficulte === 'moyenne' && <span className='badge badge-secondary'>{item.difficulte}</span>}
                            {item.difficulte === 'difficile' && <span className='badge badge-accent'>{item.difficulte}</span>}
                        </p>

                       <Link to={`/recettes/${item.id}`}>
                            <button className="bton bton-primary">Voir plus</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards