import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import SearchForm from "../SearchBar/SearchBar.jsx";
import "./Header.css";

// Functional component for the Header
const Header = () => {
  return (
    // Main wrapper for the header section
    <div className='holder'>
      
      {/* Header section containing navigation and content */}
      <header className='header'>
        
        {/* Navbar component - displays navigation bar */}
        <Navbar />
        
        {/* Header content - main title, description, and search form */}
        <div className='header-content flex flex-c text-center text-white'>
          
          {/* Header title */}
          <h2 className='header-title text-capitalize'>Discover Your Favorite Book</h2><br />
          
          {/* Header subtitle text */}
          <p className='header-text fs-18 fw-3'>by finding title, author, genre, or keyword.</p>
          
          {/* Search form component */}
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header;
