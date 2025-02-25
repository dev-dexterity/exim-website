import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

    // Add click event listener to handle clicks outside the navbar
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        mobileMenu
      ) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav ref={navRef} className={`container ${sticky ? "dark_nav" : ""}`}>
      <p>
        <FontAwesomeIcon icon={faExchangeAlt} /> Prabha Exim Network
      </p>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={closeMenu}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="products"
            smooth={true}
            offset={-200}
            duration={500}
            onClick={closeMenu}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="products"
            smooth={true}
            offset={450}
            duration={500}
            onClick={closeMenu}
          >
            Founders
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="products"
            smooth={true}
            offset={1050}
            duration={500}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu_icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
