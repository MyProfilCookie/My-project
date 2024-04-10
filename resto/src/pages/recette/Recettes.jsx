/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Cards from '../../components/Cards'

function Recettes() {
  const [recettes, setRecettes] = React.useState([]);
  const [filteredRecettes, setFilteredRecettes] = React.useState([]);
  const [search, setSearch] = React.useState('toutes');
  const [searchOptions, setSearchOptions] = React.useState(['Default']);

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
    return filtered;
  }
  // montrer toute la base de données
  const showAll = () => {
    setFilteredRecettes(recettes);
    setSearch('toutes');
    return recettes;
  }
  const showCategory = (option) => {
    setSearchOptions(option);
    let sortedRecettes = [...filteredRecettes]
    switch (option[0]) {
      case 'Pains et viennoiserie':
        sortedRecettes.sort((a, b) => a.pain - b.pain);
        break;
      case 'Chocolat':
        sortedRecettes.sort((a, b) => a.chocolat - b.chocolat);
        break;
      case 'Gourmandises':
        sortedRecettes.sort((a, b) => a.gourmandises - b.gourmandises);
        break;
      case 'Fruits':
        sortedRecettes.sort((a, b) => a.fruits - b.fruits);
        break;
      default:
        sortedRecettes = filterRecettes('toutes');
        break;
    }
    setFilteredRecettes(sortedRecettes);
    return sortedRecettes;

  }




  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredRecettes(recettes.filter((recette) => recette.title.toLowerCase().includes(e.target.value.toLowerCase())));
  }

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

      <div className="section-container">
        {/* bouton de recherche */}
        <div>Bouton de recherche</div>
        <div className='flex flew-row gap-4'>

          <button onClick={showAll} className="btn">toutes</button>
          <button onClick={() => filterRecettes('Pains et viennoiserie')} className="btn">Pains et viennoiserie</button>
          <button onClick={() => filterRecettes('Chocolat')} className="btn">Chocolat</button>
          <button onClick={() => filterRecettes('Gourmandises')} className="btn">Gourmandise</button>
          <button onClick={() => filterRecettes('Fruits')} className="btn">Fruits</button>
        </div>
        {/* <div>
          <select className="form-select" aria-label="Default select example" onChange={(e) => showCategory(e.target.value)}>
            <option value="toutes">Toutes</option>
            <option value="Pains et viennoiserie">Pains et viennoiserie</option>
            <option value="Chocolat">Chocolat</option>
            <option value="Gourmandise">Gourmandise</option>
            <option value="Fruits">Fruits</option>
          </select>
        </div> */}
        {/* faisons afficher la liste de nos recettes */}
        <div className='grid grid-cols-2 media-grid-cols-3 lg-grid-cols-4   gap-4 mb-10' >
          {filteredRecettes.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

    </div >
  )
}

export default Recettes
