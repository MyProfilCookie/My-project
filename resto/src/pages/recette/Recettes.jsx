/* eslint-disable no-unused-vars */
import React from 'react'

function Recettes() {
  return (
    <div className='container mx-auto px-4 xl-px-24 max-w-screen-2xl b-gradient-to-b'>

      <div className='section-container py-24 flex md-flex-col-reverse justify-between items-center gap-8'>

        <div className='md-w-half space-y-7 px-4 sd-w-full '>
          <h2 className='md-text-5xl text-4xl font-bold md-leading-snug leading-snug'> La pâtisserie <span className='text-red'>gourmande</span> <span className='text-red'>elit</span>.</h2>
          <p className='text-xl text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className=' btn-primary px-8 py-3 font-semibold rounded-full'>Voir plus</button>

        </div>


      </div>
    </div>
  )
}

export default Recettes
