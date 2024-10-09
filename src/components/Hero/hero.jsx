import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-txt">
            <h1>Prabha Exim Networks</h1>
            <p>At Prabha Exim Networks, we are dedicated to simplifying global trade by offering tailored import-export solutions for businesses of all sizes. With our deep expertise in international trade regulations, logistics, and compliance, we ensure a seamless and efficient process for companies looking to expand globally.At Prabha Exim Networks, we are committed to delivering excellence and fostering long-term partnerships in the world of global commerce. </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
    
  )
}
import './hero.css'

export default hero
