import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img_1 from '../../assets/favicon.ico'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './products.css';

// import required modules
import {Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <div className='products'>
      <p className='swipe'>Swipe &rarr;</p>
      <Swiper
        spaceBetween={60}
        slidesPerView={2}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Mousewheel, Keyboard]}
        className="mySwiper"

        breakpoints={{
          // When the window width is >= 320px, 2 slides will be shown
          320: {
            slidesPerView: 2, // for mobile devices
            spaceBetween: 20,
          },
          // When the window width is >= 768px, 3 slides will be shown
          768: {
            slidesPerView: 3, // for tablets and above
            spaceBetween: 40,
          },
        }}
      >
                  <SwiperSlide  ><h3>Turmeric Powder</h3>
                    <p>Rattan furniture is known for its lightweight, yet sturdy structure, making it ideal for bedroom use. It brings a natural, rustic charm to interiors, commonly used in headboards, bed frames, and other furniture. Rattan is durable and eco-friendly, often preferred for outdoor and indoor use alike.</p>
                    <a href="/product-one" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>Banana Powder</h3>
                    <p>Rattan furniture is known for its lightweight, yet sturdy structure, making it ideal for bedroom use. It brings a natural, rustic charm to interiors, commonly used in headboards, bed frames, and other furniture. Rattan is durable and eco-friendly, often preferred for outdoor and indoor use alike.</p>
                    <a href="/product-two" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>Gawar Powder</h3>
                    <p>Rattan furniture is known for its lightweight, yet sturdy structure, making it ideal for bedroom use. It brings a natural, rustic charm to interiors, commonly used in headboards, bed frames, and other furniture. Rattan is durable and eco-friendly, often preferred for outdoor and indoor use alike.</p>
                    <a href="/product-three" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>Sweet Potato</h3>
                    <p>Rattan furniture is known for its lightweight, yet sturdy structure, making it ideal for bedroom use. It brings a natural, rustic charm to interiors, commonly used in headboards, bed frames, and other furniture. Rattan is durable and eco-friendly, often preferred for outdoor and indoor use alike.</p>
                    <a href="product-four" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
                  </SwiperSlide>
      </Swiper>
    </div>
  );
}
