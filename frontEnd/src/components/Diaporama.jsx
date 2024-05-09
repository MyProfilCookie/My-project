/* eslint-disable no-unused-vars */
import React from 'react';
import { useRef, useState } from 'react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../public/images/chocolat.jpeg';
import img2 from '../../public/images/chocolat.jpeg';
import img3 from '../../public/images/chocolat.jpeg';
import img4 from '../../public/images/chocolat.jpeg';
import img5 from '../../public/images/chocolat.jpeg';
import img6 from '../../public/images/chocolat.jpeg';
import img7 from '../../public/images/chocolat.jpeg';
import img8 from '../../public/images/chocolat.jpeg';
import img9 from '../../public/images/chocolat.jpeg';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

function Diaporama() {
    
 
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        // effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={'auto'}
        // coverflowEffect={{
        //   rotate: 20,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        autoplay={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper section-container rounded-3xl mt-20"
       
      >
            <SwiperSlide><img src={img} className='img-diaporama' /></SwiperSlide>
            <SwiperSlide><img src={img2} className='img-diaporama' /></SwiperSlide>
            <SwiperSlide><img src={img3} className='img-diaporama' /></SwiperSlide>
            <SwiperSlide><img src={img4} className='img-diaporama' /></SwiperSlide>
            <SwiperSlide><img src={img5} className='img-diaporama' /></SwiperSlide>
            <SwiperSlide><img src={img6} className='img-diaporama' /></SwiperSlide>
            <SwiperSlide><img src={img7} className='img-diaporama' /></SwiperSlide>
            <SwiperSlide><img src={img8} className='img-diaporama' /></SwiperSlide>
            <SwiperSlide><img src={img9} className='img-diaporama' /></SwiperSlide>
        </Swiper>
    );
}

export default Diaporama