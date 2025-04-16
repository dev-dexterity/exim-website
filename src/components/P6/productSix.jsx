import React from 'react'
import './productSix.css'
import img1 from '../../assets/jag1.png'
import img2 from '../../assets/jag2.jpg'

const productSix = () => {
  console.log('ProductOne component rendering') // Add this
  return (
    <div className='product-container'>
      <h1>Prabha Exim Networks</h1>
      <div className='title'><h3>Jaggery powder HS Code :- 17019990 </h3></div>
      <div className='image'> <img src={img1} alt="" /></div>
      <div className='content'>
        <h5> <br /> Description: </h5>
        <p>- Experience the wholesome goodness of pure,
          chemical-free Jaggery Powder, made from the finest sugarcane
          juice. Packed with essential nutrients, this unrefined natural
          sweetener enhances the taste of your favorite beverages, desserts,
          and everyday meals.
          Key Features: <br />
          ✔ 100% Natural & Unrefined <br />
          ✔ Rich in Iron & Minerals <br />
          ✔ No Artificial Additives or Preservatives <br />
          ✔ A Healthier Alternative to Sugar <br />
          ✔ Enhances Digestion & Boosts Immunity <br />
          Perfect for baking, cooking, and beverages, our Jaggery Powder
          blends effortlessly into recipes, adding a rich caramel-like sweetness
          with a nutritional boost.
          <br />
          <br />
          Jaggery Powder is a natural, unrefined sweetener made from
          sugarcane juice or palm sap. It is produced by boiling and
          evaporating the juice until it solidifies, then grinding it into a fine
          powder. Unlike refined sugar, which undergoes heavy processing,
          jaggery powder retains essential nutrients such as iron, calcium,
          potassium, and antioxidants.
          <br />
          <br />
          This makes it a healthier alternative,
          offering both sweetness and nourishment.
          Widely used in traditional and modern cuisines, jaggery powder
          enhances the flavor of beverages, desserts, and savory dishes. Its
          rich, caramel-like taste makes it an excellent substitute for artificial
          sweeteners, providing a natural way to sweeten food while
          maintaining health benefits.

          <br />
          <br />
          Beyond its culinary uses, jaggery powder
          is also valued in Ayurvedic medicine for its digestive and detoxifying
          properties, making it a staple in many households.
          <br />
          <br />
        </p>

        <h5> &rarr; What is the Description of Haldi Powder in Cooking? </h5>
        <div className='image'> <img src={img2} alt="" /></div>

        <p>Jaggery Powder is a versatile ingredient that enhances the flavor of
          both traditional and modern recipes. Made from pure sugarcane
          juice, it adds a rich, caramel-like sweetness while preserving
          essential minerals and nutrients. Unlike refined sugar, it offers a
          deeper taste and natural health benefits, making it a preferred choice
          for cooking and baking.
          <br />
          <br />
          Beverages – Use it in tea, coffee, smoothies, and traditional
          drinks like buttermilk and lemonade. <br />
          Desserts & Sweets – Ideal for Indian sweets like kheer, halwa,
          laddoos, and cakes. <br />
          Baking – A great natural substitute for sugar in cookies, muffins,
          and bread. <br />
          Savory Dishes – Adds a mild sweetness to curries, chutneys, and
          sauces. <br />
          Pickles & Marinades – Enhances the taste while balancing
          flavors.
          <br />
          <br />
          - The production of jaggery powder requires a warm and
          tropical climate with ample sunshine and moderate to high
          humidity. Sugarcane, the primary raw material for jaggery, thrives in
          regions with temperatures ranging between 20°C to 35°C and annual
          rainfall between 1000 to 1500 mm. A frost-free environment is
          essential, as extreme cold conditions can hinder sugarcane growth
          and reduce sucrose content
          <br />
          <br />
          Ideal jaggery-producing regions experience long sunny days, which
          help in the efficient evaporation of sugarcane juice during
          processing. Moderate humidity levels ensure proper drying and
          prevent moisture retention in the final jaggery powder, preserving its
          quality and shelf life.
          Bottom of Form </p>
      </div>

      <a href="/" className='btn dark-btn'>Go Back to Home Page</a>
    </div>
  )
}

export default productSix