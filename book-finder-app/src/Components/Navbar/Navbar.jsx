import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../Images/logo.jpg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

// Functional component for the Navbar
const Navbar = () => {
  // State to toggle the mobile menu
  const [toggleMenu, setToggleMenu] = useState(false);
  
  // Function to handle menu toggle
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    // Main navigation bar element
    <nav className='navbar' id="navbar">
      
      {/* Navbar container with brand/logo and toggler button */}
      <div className='container navbar-content flex'>
        
        {/* Logo and toggler section */}
        <div className='brand-and-toggler flex flex-sb'>
          
          {/* Logo linking back to the home page */}
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Book Finder</span>
          </Link>
          
          {/* Button to toggle mobile menu, changes color based on toggle state */}
          <button 
            type="button" 
            className='navbar-toggler-btn' 
            onClick={handleNavbar}>
            <HiOutlineMenuAlt3 
              size={35} 
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`
              }} 
            />
          </button>
        </div>

        {/* Collapsible menu, toggles visibility based on `toggleMenu` state */}
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          
          {/* Navigation links */}
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
