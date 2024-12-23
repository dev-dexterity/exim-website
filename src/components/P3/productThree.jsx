import React from 'react'
import './productThree.css'
import img1 from '../../assets/g1.png'
import img2 from '../../assets/g2.png'

const productThree = () => {
  return (
    <div className='product-container'>
      <h1>Prabha Exim Networks</h1>
      <div className='title'><h3>GUAR GUM POWDER HS CODE 13023290 </h3></div>
      <div className='image'> <img src={img1} alt="" /></div>
      <div className='content'>
        <h5> <br /> Description: </h5>
        <p> Guar gum powder is a natural, versatile product derived from the seeds of the guar plant (Cyamopsis tetragonoloba), which is primarily grown in arid regions of India and Pakistan. The plant's seeds are processed to extract the gum, which is then ground into a fine powder. Guar gum is known for its thickening, gelling, and stabilizing properties, making it an important ingredient in various industries. 
        <br />
        <br />
        In the food industry, guar gum is widely used as a thickener for soups, sauces, ice creams, and salad dressings. It also helps in gluten-free baking, where it acts as a binder, improving texture and elasticity. In pharmaceuticals, it is used in medicines and nutraceuticals as a stabilizing agent and in controlled-release formulations. The cosmetic industry uses guar gum in creams, lotions, and shampoos for its moisturizing and emulsifying properties. 
        </p>
        <br /><br />
        <p>Moreover, guar gum has industrial applications such as in hydraulic fracturing for oil and gas extraction, where it serves as a viscosity enhancer. It is also employed in textiles and paper industries for its water-retention properties. </p>
        <br /><br />
        <p>The global demand for guar gum is significant, with major exporting countries including India, which is the largest producer and exporter, followed by the United States and European countries that use it in manufacturing and food production. </p>

        <h5> &rarr; What is the description of guar powder in cooking?</h5>
        <div className='image'> <img src={img2} alt="" /></div>

        <p>Guar gum powder in cooking is used primarily as a thickening agent. It is derived from the seeds of the guar plant, and its high soluble fiber content gives it the ability to absorb water and form a gel-like consistency. This makes it ideal for thickening soups, sauces, gravies, and puddings. Guar gum also serves as a stabilizer in products like ice creams, helping to improve texture by preventing ice crystals from forming, thus giving the product a smoother finish.  
        <br />
        <br />
        In gluten-free baking, guar gum is often used as a binder and elasticity enhancer, replacing the gluten that is otherwise absent in gluten-free flour blends. It helps to hold the dough together, providing a better structure for baked goods like bread, cakes, and cookies. 
        <br />
        <br />
        Another unique use of guar gum in cooking is in beverages such as smoothies, where it acts as a suspending agent, helping ingredients like fruits or powders to stay evenly distributed throughout the drink.  
        <br />
        <br />
        As a low-calorie and plant-based ingredient, guar gum is valued in the health-conscious food sector. It aids in digestive health by promoting fiber intake, helping in maintaining healthy bowel movements. </p>
        <br /><br />
      </div>

      <a href="/" className='btn dark-btn'>Go Back to Home Page</a>
    </div>
  )
}

export default productThree