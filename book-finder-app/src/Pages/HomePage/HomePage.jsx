import React from 'react';
import Header from '../../Components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';

// Functional component for the HomePage
const HomePage = () => {
  return (
    // Main container for the homepage layout
    <main>
        
        {/* Header component - displays the main navigation or header of the app */}
        <Header />
        
        {/* Outlet component - renders the matching child route components based on the current route */}
        <Outlet />
    </main>
  )
}

export default HomePage;
