import React from 'react'
import './about.css'
import left from '../../assets/left.jpg'
import play_icon from '../../assets/play.png'


const about = () => {
  return (
    <div className='about'>
      <div className="about_left">
        <img src={left} alt="" className='left'/>
        <img src={play_icon} alt="" className='play_icon' />
      </div>
      <div className="about_right">
        <h3>About Prabha Exim Networks</h3>
        <h2>Your Search Ends Here!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi id exercitationem hic ducimus voluptate ipsam? Modi, dolorem, fugit enim accusantium nam suscipit illo dolorum dignissimos nobis quos culpa placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore accusamus vel quod id nostrum sunt vitae nesciunt temporibus commodi qui quibusdam, quidem aut? Optio nemo dolore porro dignissimos autem velit!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam libero exercitationem repellat beatae alias, vero, veritatis ullam corrupti debitis labore tempora dolor sit illo, voluptas impedit sint architecto culpa deserunt?</p>
      </div>
    </div>
  )
}

export default about
