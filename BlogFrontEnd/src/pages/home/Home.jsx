/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
// import SpecialRecette from './SpecialRecette'
import SectionRecette from './SectionRecette'
import OurServices from './OurCategories'

import Diaporama from '../../components/Diaporama'

const Home = () => {
  return (
    <div>
      <Banner />
      <Diaporama />
      <Categories />
      {/* <SpecialRecette /> */}
      <SectionRecette />
      <OurServices />
    </div>
  )
}

export default Home