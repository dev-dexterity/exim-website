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
        slidesPerView={3}
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
                  <SwiperSlide>
                    <h3>ONIONS DRIED</h3>
                    <p>Dried onions are a versatile ingredient that retains much of the flavor and aroma of fresh onions. Often used in soups, stews, sauces, and seasoning mixes, dried onions provide a convenient alternative to fresh onions with a longer shelf life, reducing preparation time in cooking.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>KIDNY BENS INCL WHTE PEA BENS DRIED AND SHLD</h3>
                    <p>Dried kidney beans and white pea beans are rich in fiber, protein, and essential minerals. These legumes are commonly used in a variety of dishes, including salads, soups, and stews. Before cooking, they typically require soaking to soften and reduce cooking time.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>LENTILS (MOSUR),DRIED AND SHLD</h3>
                    <p>Lentils, particularly the Mosur variety, are a staple in many parts of the world. Known for their high protein content, they are widely used in Indian and Middle Eastern cuisines. They are ideal for making dal, soups, and stews, providing a rich, hearty flavor.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>OTHER GROUNDNUT SEEDS</h3>
                    <p>Groundnut seeds, commonly known as peanuts, are a key source of vegetable oil and protein. They are widely grown for oil production or used in snacks, as they can be roasted, boiled, or processed into peanut butter and confectionery items.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>GROUND-NUT, NOT ROASTED OR OTHERWISE COOKED, WHETHER OR NOT SHELLED OR BROKEN-SEED</h3>
                    <p>Raw groundnuts, whether shelled or broken, are often used for further processing, such as roasting or oil extraction. These versatile seeds are a popular choice in culinary preparations and for producing various by-products like peanut oil and peanut butter.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>SUNFLOWER SEEDS WHETHER OR NOT BROKEN</h3>
                    <p>Sunflower seeds are highly valued for their nutritional benefits, including being rich in healthy fats, vitamins, and minerals. They are consumed as a snack, used in baking, or pressed to extract sunflower oil, a healthy alternative to other cooking oils.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>TURMERIC (CURCUMA)</h3>
                    <p>Turmeric is a spice derived from the rhizomes of the Curcuma plant, known for its vibrant yellow color and medicinal properties. Widely used in Indian and Southeast Asian cooking, it adds a distinct flavor to curries and is also revered for its anti-inflammatory and antioxidant properties.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>POWDER</h3>
                    <p>Powders of various substances, such as spices, herbs, or grains, are used in culinary, medicinal, or industrial applications. Powdered forms of ingredients are prized for their ease of use and ability to blend quickly into dishes or products, ensuring even distribution of flavor or nutrients.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>KHANDSARI SUGAR</h3>
                    <p>Khandsari sugar is a type of raw, unrefined sugar made from sugarcane juice. This traditional Indian sweetener is less processed than refined sugar, retaining natural molasses, which gives it a unique flavor and color. It is commonly used in sweet dishes, beverages, and desserts.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>SEEDS OF CORIANDER:NEITHER CRUSHED NOR GROUND</h3>
                    <p>Whole coriander seeds are widely used in cooking, especially in Indian, Mexican, and Mediterranean cuisines. They impart a mild citrusy flavor to dishes when toasted or ground. Whole seeds are also used in spice blends, pickling, and brewing for flavoring.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>SEEDS OF CUMIN: CRUSHED OR GROUND</h3>
                    <p>Cumin seeds, either whole or ground, are a staple in many global cuisines, including Indian, Middle Eastern, and Latin American. They provide a warm, earthy, and slightly bitter flavor. Ground cumin is especially popular for seasoning curries, stews, and roasted vegetables.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>BANANAS FRSH OR DRIED</h3>
                    <p>Bananas, whether fresh or dried, are a highly nutritious fruit, rich in potassium, vitamins, and fiber. Fresh bananas are a quick and healthy snack, while dried bananas are often used in trail mixes, baking, or as a convenient, portable snack with a concentrated flavor and sweetness.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>BANANAS, FRESH</h3>
                    <p>Fresh bananas are one of the most consumed fruits globally. They are sweet and soft when ripe, providing a quick source of energy. Used in everything from smoothies to desserts, they are also a key ingredient in baked goods like banana bread and muffins.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>OTHER ROASTED AND FRIED VEGETABLE PRODUCTS</h3>
                    <p>Roasted and fried vegetable products cover a wide range of items, from snacks to side dishes. These vegetables are cooked to enhance flavor and texture, often used in salads, as garnishes, or eaten as crispy snacks. They retain nutrients and add variety to the diet.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>BEANS OF THE SPP VIGNA MUNGO (L.) HEPPER</h3>
                    <p>Known as black gram or urad beans, these are widely used in Indian cuisine. They are ground into flour for making dosa, idli, and papad, or cooked whole in dal. Rich in protein, they play an essential role in vegetarian diets.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>SEEDS OF ANISE, BADIAN, FENNEL, CORIANDER, CUMIN OR CARAWAY; JUNIPER BERRIES</h3>
                    <p>These aromatic seeds are commonly used in cooking for their distinctive flavors. They are often added to spice blends, stews, and baked goods. Each seed offers different health benefits, such as aiding digestion and acting as a mild antiseptic.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>SEASAMUM SEEDS W/N BROKEN</h3>
                    <p>Sesame seeds are small, oil-rich seeds used in cooking, baking, and oil extraction. They are a common garnish for dishes like salads and sushi or used in traditional products like tahini and sesame oil. Known for their nutty flavor, they are also a source of healthy fats and calcium.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>OTHER WOODEN FURNITURE</h3>
                    <p>This category includes various types of wooden furniture, such as tables, chairs, cabinets, and storage units. Known for its durability and aesthetic appeal, wooden furniture remains a popular choice for home and office interiors, offering both functionality and style.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
                  <SwiperSlide  ><h3>WOODEN OF RATTAN FURNITURE OF THE KIND USED IN BED</h3>
                    <p>Rattan furniture is known for its lightweight, yet sturdy structure, making it ideal for bedroom use. It brings a natural, rustic charm to interiors, commonly used in headboards, bed frames, and other furniture. Rattan is durable and eco-friendly, often preferred for outdoor and indoor use alike.</p>
                    <button className='btn dark-btn'>Explore More <FontAwesomeIcon className='right-arrow' icon={faArrowRight} /></button>
                  </SwiperSlide>
      </Swiper>
    </div>
  );
}
