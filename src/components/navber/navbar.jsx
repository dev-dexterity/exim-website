import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo_4.png'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


const navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
      <p><FontAwesomeIcon icon={faExchangeAlt} /> Prabha Exim Network</p>
      <ul>
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
          offset = {-230}
          duration = {500}
          >
          Products
          </Link>
        </li>
        <li><Link className='btn' to = 'products'
          smooth = {true}
          offset = {380}
          duration = {500}
          >
          Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default navbar
