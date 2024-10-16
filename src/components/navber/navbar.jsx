import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import menu_icon from '../../assets/menu-icon.png'


const navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const ToggleMenu = ()=> {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
      <p><FontAwesomeIcon icon={faExchangeAlt} /> Prabha Exim Network</p>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link 
          to = 'hero'
          smooth = {true}
          offset = {0}
          duration = {500}
          >
          Home
          </Link>
        </li>
        <li>
          <Link 
          to = 'services'
          smooth = {true}
          offset = {-260}
          duration = {500}
          >
          Services
          </Link>
        </li>
        <li>
          <Link 
          to = 'about'
          smooth = {true}
          offset = {-150}
          duration = {500}
          >
          About Us
          </Link>
        </li>
        <li>
          <Link 
          to = 'products'
          smooth = {true}
          offset = {-200}
          duration = {500}
          >
          Products
          </Link>
        </li>
        <li><Link className='btn' to = 'products'
          smooth = {true}
          offset = {400}
          duration = {500}
          >
          Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={ToggleMenu}/>
    </nav>
  )
}

export default navbar
