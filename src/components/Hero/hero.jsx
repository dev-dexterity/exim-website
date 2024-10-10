import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-txt">
            <h1>Prabha Exim Networks</h1>
            <p>At Prabha Exim Networks, we simplify global trade by offering tailored import-export solutions. With expertise in international regulations and logistics, we ensure a seamless process for businesses expanding globally. </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
    
  )
}
import './hero.css'

export default hero
