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
import { Mousewheel, Keyboard } from 'swiper/modules';

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
          <p>Haldi powder, commonly known as turmeric powder, is a bright yellow spice derived from the rhizome of the turmeric plant (Curcuma longa), which belongs to the ginger family. Native to South Asia, turmeric is widely cultivated in tropical and subtropical regions, particularly in India, which is the largest producer and exporter.</p>
          <a href="/product-one" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
        </SwiperSlide>
        <SwiperSlide  ><h3>Banana Powder</h3>
          <p> Banana powder is a fine, light-yellow powder made from ripe bananas, valued for its nutritional benefits and versatility. Produced by drying and grinding banana pulp, it retains the fruit's natural flavor and nutrients while offering a longer shelf life. Rich in potassium, magnesium, dietary fiber, and vitamins, it is low in fat and ideal for health-conscious consumers.</p>
          <a href="/product-two" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
        </SwiperSlide>
        <SwiperSlide  ><h3>Gawar Powder</h3>
          <p>Guar gum powder is a natural, versatile product derived from the seeds of the guar plant (Cyamopsis tetragonoloba), which is primarily grown in arid regions of India and Pakistan. The plant's seeds are processed to extract the gum, which is then ground into a fine powder. Guar gum is known for its thickening, gelling, and stabilizing properties, making it an important ingredient in various industries. </p>
          <a href="/product-three" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
        </SwiperSlide>
        <SwiperSlide  ><h3>Sweet Potato</h3>
          <p>Sweet potatoes (Ipomoea batatas) are a starchy, sweet-tasting root vegetable cherished for their flavor, nutritional value, and versatility. They belong to the Convolvulaceae family and trace their origins to Central and South America. Over time, they have become a globally cultivated crop, thriving in various climates and playing a significant role in diets worldwide. </p>
          <a href="product-four" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
        </SwiperSlide>
        <SwiperSlide  ><h3>Ghee</h3>
          <p>Ghee is a traditional form of clarified butter that has been used in Indian
            kitchens for centuries. It is made by slowly heating butter to remove water
            and milk solids, leaving behind a pure, golden-yellow fat. Known for its rich
            aroma, nutty flavor, and smooth texture, ghee is an essential ingredient in
            cooking, Ayurvedic medicine, and religious rituals. It is highly valued not
            only for its taste but also for its health benefits.</p>
          <a href="product-five" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
        </SwiperSlide>
        <SwiperSlide  ><h3>Jaggery Powder</h3>
          <p>Experience the wholesome goodness of pure,
            chemical-free Jaggery Powder, made from the finest sugarcane
            juice. Packed with essential nutrients, this unrefined natural
            sweetener enhances the taste of your favorite beverages, desserts,
            and everyday meals.Perfect for baking, cooking, and beverages, our Jaggery Powder
            blends effortlessly into recipes, adding a rich caramel-like sweetness
            with a nutritional boost.</p>
          <a href="product-six" className='btn dark-btn size'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
