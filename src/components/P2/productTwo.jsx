import React from 'react'
import './productTwo.css'
import img1 from '../../assets/b1.jpg'
import img2 from '../../assets/b2.jpg'

const productTwo = () => {
  return (
    <div className='product-container'>
      <h1>Prabha Exim Networks</h1>
      <div className='title'><h3>Banana Powder HS Code 08039010</h3></div>
      <div className='image-1'> <img src={img1} alt="" /></div>
      <div className='content'>
        <h5> <br /> Description: </h5>
        <p> Banana powder is a fine, light-yellow powder made from ripe bananas, valued for its nutritional benefits and versatility. Produced by drying and grinding banana pulp, it retains the fruit's natural flavor and nutrients while offering a longer shelf life. Rich in potassium, magnesium, dietary fiber, and vitamins, it is low in fat and ideal for health-conscious consumers. 
        <br />
        <br />
        Widely used in the food industry, banana powder enhances smoothies, baby foods, and baked goods. It is also a key ingredient in dietary supplements and skincare products, thanks to its nutritional and moisturizing properties. Additionally, it serves as a sustainable solution to utilize surplus bananas, reducing waste while catering to diverse industries globally.  
        </p>

        <h5> &rarr; Description of the Banana powder in cooking </h5>
        <div className='image'> <img src={img2} alt="" /></div>

        <p>Banana powder is a versatile ingredient commonly used in cooking, known for its natural sweetness and nutritional benefits. It is often added to smoothies and beverages, offering a convenient way to add banana flavor without the need for fresh fruit. The powder mixes well in protein shakes and energy drinks, providing an easy, nutritious boost. 
        <br />
        <br />
        In baking, banana powder is used to enhance the flavor of cakes, muffins, and cookies, adding a mild banana taste and serving as a natural substitute for sugar. It works especially well in healthier baking recipes, making it ideal for those seeking gluten-free or low-sugar alternatives. 
        <br />
        <br />
        For baby food, banana powder is a popular choice due to its easy digestibility and rich nutrient profile. It can be mixed with milk, water, or fruit purees to create smooth, nutritious meals for infants. 
        <br />
        <br />
        In breakfast foods, banana powder is added to oatmeal, porridge, or granola to enhance flavor and nutritional content without needing added sugars. It’s also used in energy bars, trail mixes, or yogurt for a natural, healthy flavor boost. </p>
        <br /><br />
      </div>

      <a href="/" className='btn dark-btn'>Go Back to Home Page</a>
    </div>
  )
}

export default productTwo