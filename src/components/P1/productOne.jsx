import React from 'react'
import './productOne.css'
import img1 from '../../assets/h2.jpg'
import img2 from '../../assets/h1.jpg'

const productOne = () => {
    console.log('ProductOne component rendering') // Add this
  return (
    <div className='product-container'>
      <h1>Prabha Exim Networks</h1>
      <div className='title'><h3>HALDI POWDER HS CODE 09103030</h3></div>
      <div className='image'> <img src={img1} alt="" /></div>
      <div className='content'>
        <h5> <br /> Description: </h5>
        <p>Haldi powder, commonly known as turmeric powder, is a bright yellow spice derived from the rhizome of the turmeric plant (Curcuma longa), which belongs to the ginger family. Native to South Asia, turmeric is widely cultivated in tropical and subtropical regions, particularly in India, which is the largest producer and exporter. 
        <br />
        <br />
        The rhizomes are harvested, boiled, dried, and ground into a fine powder to produce haldi. This vibrant yellow-orange powder has a warm, slightly bitter, and earthy flavor, with a hint of peppery spice. Its primary bioactive component, curcumin, is responsible for its color, medicinal properties, and potential health benefits. 
        <br />
        <br />
        Haldi powder is an essential ingredient in Indian and Southeast Asian cuisines, used to flavor and color dishes such as curries, rice, and lentils. Beyond its culinary uses, it has significant cultural and religious importance, often used in traditional ceremonies and rituals. 
        <br />
        <br />
        Renowned for its medicinal properties, haldi powder is a cornerstone of Ayurvedic medicine and other traditional healing systems. It is known for its anti-inflammatory, antioxidant, antimicrobial, and wound-healing properties. Turmeric is also a popular ingredient in skincare and wellness, used in masks, teas, and health supplements for its purported benefits in improving skin tone, boosting immunity, and supporting digestion. 
        <br />
        <br />
        In modern industries, haldi powder finds applications in food processing as a natural colorant, in cosmetics for skin products, and in pharmaceuticals for supplements and formulations targeting inflammation and joint health. Its versatility and health-promoting qualities make turmeric powder a globally valued product. 
        </p>

        <h5> &rarr; What is the Description of Haldi Powder in Cooking? </h5>
        <div className='image'> <img src={img2} alt="" /></div>

        <p>Haldi powder, or turmeric powder, is a vibrant yellow spice that plays a central role in cooking, especially in Indian, Southeast Asian, and Middle Eastern cuisines. Derived from the dried and ground rhizome of the turmeric plant (Curcuma longa), it has a warm, earthy, and slightly bitter flavor with a subtle peppery and mustard-like aroma. 
        <br />
        <br />
        In cooking, haldi powder is a key ingredient for adding color, flavor, and depth to dishes. It is commonly used in curries, lentil soups (dal), rice dishes, marinades, and spice blends like garam masala. Beyond its distinctive taste, haldi imparts a golden-yellow hue that enhances the visual appeal of food, making it especially popular in recipes where vibrant presentation is desired. 
        <br />
        <br />
        Haldi is not just a flavoring agent but also valued for its preservative and digestive properties. In many recipes, it is added early during cooking to blend with other spices and release its flavors. Its versatility extends to beverages like turmeric milk (haldi doodh) and turmeric tea, where its warming qualities shine. 
        <br />
        <br />
        Turmeric's ability to complement a wide range of ingredients, from vegetables to meats, has made it a culinary staple, celebrated for its unique taste and health-enhancing qualities in traditional and contemporary cooking alike. 
        Bottom of Form </p>
      </div>

      <a href="/" className='btn dark-btn'>Go Back to Home Page</a>
    </div>
  )
}

export default productOne