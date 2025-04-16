import React from 'react'
import './productFive.css'
import img1 from '../../assets/ghee1.jpg'
import img2 from '../../assets/ghee2.jpg'

const productFive = () => {
  console.log('ProductOne component rendering') // Add this
  return (
    <div className='product-container'>
      <h1>Prabha Exim Networks</h1>
      <div className='title'><h3>Clarified Butter (Ghee) HS Code – 04059020</h3></div>
      <div className='image'> <img src={img1} alt="" /></div>
      <div className='content'>
        <h5> <br /> Description: </h5>
        <p>Ghee is a traditional form of clarified butter that has been used in Indian
          kitchens for centuries. It is made by slowly heating butter to remove water
          and milk solids, leaving behind a pure, golden-yellow fat. Known for its rich
          aroma, nutty flavor, and smooth texture, ghee is an essential ingredient in
          cooking, Ayurvedic medicine, and religious rituals. It is highly valued not
          only for its taste but also for its health benefits.
          <br />
          <br />
          Ghee is lactose-free, easy
          to digest, and contains essential nutrients such as vitamins A, D, E, and K.
          It has a high smoke point, which makes it ideal for frying and sautéing. In
          many cultures, ghee is seen as a symbol of purity, nourishment, and
          wellness.
          <br />
          <br />
          The quality of ghee is closely linked to the quality of the milk
          used in its preparation, and climate plays an important role in dairy
          farming. A moderate to warm climate, typically ranging between 15°C
          to 30°C, is ideal for raising healthy cows and buffaloes that produce
          rich, nutritious milk. Regions with adequate sunlight, clean water
          sources, and moderate rainfall support the growth of green fodder,
          which directly influences the milk’s quality.

          <br />
          <br />
          A healthy climate ensures
          better animal health and higher milk yield, which in turn leads to the
          production of high-quality ghee with superior taste, aroma, and
          texture. Areas with seasonal balance and good weather conditions
          are considered most favorable for consistent and sustainable ghee
          production.
          <br />
          <br />
          In ghee production, harvesting refers to the careful collection
          of fresh milk from dairy animals such as cows or buffaloes. Milking is
          usually done twice a day — in the early morning and evening — under
          clean and hygienic conditions to ensure purity. The quality of milk
          collected during this stage directly impacts the texture, aroma, and
          nutritional value of the ghee. After milking, the milk is either churned
          to separate cream or butter, or directly processed depending on the
          method used.
        </p>
        <p>The butter is then gently heated until all water
          evaporates and milk solids separate, leaving behind pure, golden
          ghee. This traditional process preserves the natural flavor and health
          benefits of the final product. The process and handling of milk with
          care is essential for producing high-quality ghee.</p>

        <h5> &rarr; What is the Description of Haldi Powder in Cooking? </h5>
        <div className='image'> <img src={img2} alt="" /></div>

        <p>Ghee plays a vital role in cooking, especially in Indian and South Asian
          cuisines. Its rich flavor, pleasant aroma, and high smoke point make it ideal
          for sautéing, frying, deep-frying, and tempering spices. Unlike regular
          butter, ghee does not burn easily at high temperatures, which helps
          preserve the taste and nutrition of food.
          <br />
          <br />
          It enhances the flavor of dishes like
          dals, curries, rice, and traditional sweets such as halwa and laddoos. In
          addition to taste, ghee adds a smooth texture and richness to the food. It is
          also used for greasing pans, baking, and as a topping over hot chapatis or
          steamed rice. Because of its natural purity and health benefits, ghee is
          often considered a superior cooking fat compared to processed oils.
          <br />
          <br />
          Ghee is a multi-purpose product used across various
          industries due to its nutritional richness, purity, and traditional
          significance. In the culinary industry, ghee is a staple for
          cooking, frying, roasting, and seasoning.
          <br />
          <br />
          It enhances the flavor
          of both savory and sweet dishes and is an essential ingredient
          in Indian sweets like laddoos, halwa, and barfis. Due to its high
          smoke point, it is also used in baking and deep-frying without
          breaking down into harmful compounds.
          Bottom of Form </p>
      </div>

      <a href="/" className='btn dark-btn'>Go Back to Home Page</a>
    </div>
  )
}

export default productFive