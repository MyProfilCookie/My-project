/* eslint-disable react/no-unescaped-entities */

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import recettes from '../../../public/recettes';


function SpecialRecette() {
  const [recettes, setRecettes] = React.useState([]);
  const slider = React.useRef(null);
  


  useEffect(
    () => {
      fetch('http://localhost:3000/recettes')
        .then((response) => response.json())
        .then((data) => {
          const specialsCategory = data.filter((recette) => recette.category === 'Pains et viennoiserie');
          setRecettes(specialsCategory);
          console.log(specialsCategory);

        })
    }, []

  )
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <div className='section-container my-20 relative'>
      <div className='text-center'>
        <p className='text-red uppercase tracking-wide font-medium text-lg'>Voici quelques recettes</p>
        <h2 className='text-4xl md-text-5xl font-bold my-2 md-leading-snug leading-snug md-w-96 md-mx-auto '>N'hésitez pas à les reproduire</h2>

      </div>
      <div className='absolute top-8 right-3 mb-10 flex md-relative md-mx-auto'>
        <button onClick={() => slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5 bg-red'><FontAwesomeIcon icon={faChevronLeft} size="2xl" className='w-8 h-8 p-1' /></button>
        <button onClick={() => slider?.current?.slickNext()} className='btn p-2 mx-2 rounded-full ml-5 bg-red'><FontAwesomeIcon icon={faChevronRight} size="2xl" className='w-8 h-8 p-1' /></button>

      </div>
      <Slider ref={slider} {...settings} className='overflow-hidden mt-20 mb-2 space-x-4'>
        {
          recettes.map((recette) => {
            return <Cards key={recette.id} item={recette} />
          })
        }
      </Slider>
    </div>
  )
}

export default SpecialRecette
