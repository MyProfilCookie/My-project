/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Cards from '../../components/Cards'

function Recettes() {
  const [recettes, setRecettes] = React.useState([]);
  const [filteredRecettes, setFilteredRecettes] = React.useState([]);
  const [search, setSearch] = React.useState('toutes');
  const [searchOptions, setSearchOptions] = React.useState('toutes');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(12);
  // d'éléments par page

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await fetch('/recettes.json');
          const data = await response.json();
          (console.log(data))
          setRecettes(data);
          setFilteredRecettes(data);
        }
        catch (error) {
          console.error(error);
        }
      }
      fetchData();
    },
    []);

  const filterRecettes = (category) => {
    const filtered =
      category === 'toutes'
        ? recettes : recettes.filter((recette) => recette.category === category);
    setFilteredRecettes(filtered);
    setSearch(category);
    setCurrentPage(1);
  }
  // montrer toute la base de données
  const showAll = () => {
    setFilteredRecettes(recettes);
    setSearch('toutes');
    setCurrentPage(1);
  }
  const showCategory = (option) => {
    setSearchOptions(option);
    let sortedRecettes = recettes;
    switch (option) {
      case 'difficile':
        sortedRecettes = sortedRecettes.filter((recette) => recette.difficulte === 'difficile');
        break;
      case 'facile':
        sortedRecettes = sortedRecettes.filter((recette) => recette.difficulte === 'facile');
        break;
      case 'moyenne':
        sortedRecettes = sortedRecettes.filter((recette) => recette.difficulte === 'moyenne');
        break;
      default:
        break;
    }
    setFilteredRecettes(sortedRecettes);
    setCurrentPage(1);

  }

  const indexOfLastRecette = currentPage * itemsPerPage;
  const indexOfFirstRecette = indexOfLastRecette - itemsPerPage;
  const currentRecettes = filteredRecettes.slice(indexOfFirstRecette, indexOfLastRecette);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);




  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   setFilteredRecettes(recettes.filter((recette) => recette.title.toLowerCase().includes(e.target.value.toLowerCase())));
  // }

  return (
    <div>

      <div className='container mx-auto px-4 xl-px-24 max-w-screen-2xl b-gradient-to-b'>

        <div className='py-48 flex flex-col items-center justify-center gap-8'>

          <div className='text-center space-y-7 px-4'>
            <h2 className='media-text-5xl text-4xl font-bold media-leading-snug leading-snug'> La pâtisserie <span className='text-red'>gourmande</span> <span className='text-red'>elit</span>.</h2>
            <p className='text-xl text-gray text-xl media-w-4-5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className=' btn-primary px-8 py-3 font-semibold rounded-full'>Voir plus</button>

          </div>


        </div>
      </div>

      <div className="section-container align-center">
        {/* bouton de recherche */}
        <div>Bouton de recherche</div>
        <div className='flex flex-wrap media-justify-between items-center flew-row mx-auto'>

          <div className='flex media-mb-10 media-mt-10  gap-4 flex-wrap'>

            <button onClick={showAll} className={search === 'toutes' ? 'button active' : 'btn'}>toutes</button>
            <button onClick={() => filterRecettes('Pains et viennoiserie')} className={search === 'Pains et viennoiserie' ? 'button active' : 'btn'}>Pains et viennoiserie</button>
            <button onClick={() => filterRecettes('Chocolat')} className={search === 'Chocolat' ? 'button active' : 'btn'} >Chocolat</button>
            <button onClick={() => filterRecettes('Gourmandises')} className={search === 'Gourmandises' ? 'button active' : 'btn'}>Gourmandise</button>
            <button onClick={() => filterRecettes('Fruits')} className={search === 'Fruits' ? 'button active' : 'btn'}>Fruits</button>
          </div>
          <div>

          </div>
          {/* afficher le nombre de recettes disponibles par categorie dans la barre de recherche */}
          <div className='media-mb-10 media-mt-10 flex'>
            <select className="form-select form-select-lg btn"
              name="sort" id="sort"
              onChange={(e) => showCategory(e.target.value)}
              value={searchOptions}

            >
              <option value="toutes" >toutes</option>
              <option value="difficile">Difficile</option>
              <option value="facile">facile</option>
              <option value="moyenne">moyenne</option>
            </select>
          </div>
        </div>
        {/* faisons afficher la liste de nos recettes */}
        <div className='grid grid-cols-2 media-grid-cols-3 lg-grid-cols-4 gap-4 mb-10'>
          {currentRecettes.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>

      </div>
      <div className='flex justify-center mb-10 gap-4'>
          {
            Array.from({ length: Math.ceil(filteredRecettes.length / itemsPerPage)}).map((_, index ) => (
              <button key={index + 1} 
              onClick={() => paginate(index + 1)} 
              className={`mx-1 px-2 py-1 rounded-full ${currentPage === index + 1 ? 'btn-primary' : 'btn'}`}>
                {index + 1}
              </button>
            ))
          }
      </div>


    </div >
  )
}

export default Recettes
