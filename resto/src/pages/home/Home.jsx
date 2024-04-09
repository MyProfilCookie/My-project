/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialRecette from './SpecialRecette'
import SectionRecette from './SectionRecette'
import OurServices from './OurCategories'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <SpecialRecette />
      <SectionRecette />
      <OurServices />
    </div>
  )
}

export default Home