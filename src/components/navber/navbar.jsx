import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About us</li>
        <li>Price Calculator</li>
        <li>Products</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default navbar
