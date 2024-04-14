/* eslint-disable no-unused-vars */
import React from 'react'

function Banner() {
  return (
    <div className='container mx-auto px-4 py-16 xl-px-24 max-w-screen-2xl'>

      <div className='section-container py-16 flex md-flex-col-reverse justify-between items-center gap-8'>

        <div className='md-w-half space-y-7 sd-w-full '>
          <h2 className='md-text-5xl text-4xl font-bold md-leading-snug leading-snug'> La pâtisserie <span className='text-red'>gourmande</span> <span className='text-red'>elit</span>.</h2>
          <p className='text-xl text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className=' btn-primary px-8 py-3 font-semibold rounded-full mt-10'>Voir plus</button>

        </div>

        <div className='md-w-half space-y-7 px-4 sd-w-full text-align-center sd-w-full'>
          <img src='./images/chef.jpeg' alt="banner" className='cover rounded-3xl shadow-2xl w-150 md-w-full' />
          <div className='flex md-flex-col flex-row gap-10 items-center justify-around -mt-18'>
            <div className='flex  bg-white rounded-2xl items-center shadow-md w-64 md-w-full'>
              <img src='./bavarois.jpeg' alt="banner" width={125} height={150} className='rounded-semi md-w-half cover' />
              <div className='space-y-1 px-10-md '>

                <h5 className='font-medium mb-1'>Bavarois aux fruits rouges</h5>
                <div className="rating rating-sm">
                  <input value="5" name="rating" id="star5" type="radio" />
                  <label htmlFor="star5"></label>
                  <input value="4" name="rating" id="star4" type="radio" />
                  <label htmlFor="star4"></label>
                  <input value="3" name="rating" id="star3" type="radio" />
                  <label htmlFor="star3"></label>
                  <input value="2" name="rating" id="star2" type="radio" />
                  <label htmlFor="star2"></label>
                  <input value="1" name="rating" id="star1" type="radio" />
                  <label htmlFor="star1"></label>
                </div>
                <p className='text-red '>(6 votes)</p>
              </div>
            </div>
            <div className='flex  bg-white hidden-md md:flex rounded-2xl items-center shadow-md w-64 sd-w-full '>
              <img src='./bavarois.jpeg' alt="banner" width={125} height={150} className='rounded-semi' />
              <div className='space-y-1 '>

                <h5 className='font-medium mb-1'>Bavarois aux fruits rouges</h5>
                <div className="rating rating-sm">
                  <input value="5" name="rating" id="star6" type="radio" />
                  <label htmlFor="star5"></label>
                  <input value="4" name="rating" id="star7" type="radio" />
                  <label htmlFor="star4"></label>
                  <input value="3" name="rating" id="star8" type="radio" />
                  <label htmlFor="star3"></label>
                  <input value="2" name="rating" id="star9" type="radio" />
                  <label htmlFor="star2"></label>
                  <input value="1" name="rating" id="star10" type="radio" />
                  <label htmlFor="star1"></label>
                </div>
                <p className='text-red '>(6 votes)</p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Banner