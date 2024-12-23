
import React from 'react'
import './productFour.css'
import img1 from '../../assets/s1.jpg'
import img2 from '../../assets/s2.jpg'

const productFour = () => {
  return (
    <div className='product-container'>
      <h1>Prabha Exim Networks</h1>
      <div className='title'><h3>SWEET POTATO HS CODE 07142000  </h3></div>
      <div className='image'> <img src={img1} alt="" /></div>
      <div className='content'>
        <h5> <br /> Description: </h5>
        <p> Sweet potatoes (Ipomoea batatas) are a starchy, sweet-tasting root vegetable cherished for their flavor, nutritional value, and versatility. They belong to the Convolvulaceae family and trace their origins to Central and South America. Over time, they have become a globally cultivated crop, thriving in various climates and playing a significant role in diets worldwide. 
        <br /><br />
        The appearance of sweet potatoes varies based on their variety. Typically, they are elongated with tapered ends, though some may be rounder. Their skin comes in an array of colors, including beige, orange, red, purple, and even brown. Beneath the skin, the flesh also offers a spectrum of hues, from creamy white and sunny yellow to rich orange and vibrant purple. These colors not only influence their visual appeal but also reflect the nutrients they hold.  
        <br />
        <br />
        Sweet potatoes are celebrated for their dense nutritional profile. They are rich in complex carbohydrates and natural sugars, making them an excellent energy source. Packed with vitamins like A, C, and B6, as well as minerals such as potassium and magnesium, they are a powerhouse of health benefits. The orange varieties are particularly high in beta-carotene, while the purple ones boast anthocyanins, both of which are potent antioxidants.  
        </p>
        <p>Culinary uses of sweet potatoes are extensive. They can be baked, boiled, roasted, or fried and are integral to dishes ranging from hearty soups and savory casseroles to indulgent desserts. Beyond the kitchen, sweet potatoes have industrial applications, including starch production and processing into flour or chips. Even their vines and less visually appealing tubers serve a purpose as livestock feed, showcasing their utility in agriculture.  </p>
        
        <p>Thriving in warm climates, sweet potatoes prefer well-drained, sandy, or loamy soil and require a frost-free growing period to flourish. Their resilience and adaptability have made them a staple food in many regions, addressing both dietary and economic needs. </p>

        <h5> &rarr; What is the description of Sweet Potato in cooking? </h5>
        <div className='image'> <img src={img2} alt="" /></div>

        <p>In cooking, sweet potatoes are a versatile and flavorful ingredient widely appreciated for their natural sweetness and ability to adapt to various culinary techniques. Their creamy texture and subtly sweet flavor make them a favorite in both savory and sweet dishes. 
        <br />
        <br />
        When cooked, sweet potatoes develop a soft, moist, and tender interior, with a rich, earthy sweetness that complements a wide range of spices and seasonings. They can be baked, roasted, boiled, steamed, or fried, and their preparation methods influence their flavor profile—roasting enhances their caramelized sweetness, while steaming or boiling keeps their taste milder and more delicate. 
        <br />
        <br />
        They can be baked, roasted, boiled, steamed, or fried, and their preparation methods influence their flavor profile—roasting enhances their caramelized sweetness, while steaming or boiling keeps their taste milder and more delicate.  
        <br />
        <br />
        Sweet potatoes are used as a primary ingredient in comfort foods like mashed sweet potatoes, casseroles, and soups. They pair beautifully with spices like cinnamon, nutmeg, and ginger in desserts, while also harmonizing with savory flavors like garlic, herbs, and chili in main dishes. They can be transformed into fries, chips, or purees, and are a common choice for fillings in pies or pastries.  </p>
        <p>Their vibrant orange or yellow flesh is visually appealing, adding color to dishes, while the natural sweetness makes them an excellent alternative to regular potatoes in recipes. Whether as a side dish, a base for soups and curries, or even as a gluten-free alternative in baking, sweet potatoes are a beloved staple in kitchens worldwide. </p>
        <br /><br />
      </div>

      <a href="/" className='btn dark-btn'>Go Back to Home Page</a>
    </div>
  )
}

export default productFour