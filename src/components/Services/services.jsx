import React from 'react'
import './services.css'
import service_1 from '../../assets/service.jpg'
import service_2 from '../../assets/service2.jpg'
import service_3 from '../../assets/service3.jpg'
import icon_1 from '../../assets/truck.png'
import icon_2 from '../../assets/world.png'
import icon_3 from '../../assets/shield.png'


const services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={service_1} alt="" />
            <div className="caption">
                <img src={icon_1} alt="" />
                <p>Transport</p>
            </div>
        </div>

        <div className="service">
            <img src={service_2} alt="" />
            <div className="caption">
                <img src={icon_2} alt="" />
                <p>International</p>
            </div>
        </div>

        <div className="service">
            <img src={service_3} alt="" />
            <div className="caption">
                <img src={icon_3} alt="" />
                <p>Secured</p>
            </div>
        </div>
      
    </div>
  )
}

export default services
