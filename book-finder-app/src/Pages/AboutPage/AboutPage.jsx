import React from 'react';
import "./AboutPage.css";
import aboutImg from "../../Images/About Page.jpg";

// Functional component for the AboutPage
const AboutPage = () => {
  return (
    // Main section for About page with class 'about'
    <section className='about'>
      <div className='container'>
        
        {/* Section title */}
        <div className='section-title'>
          <h2>About</h2>
        </div>

        {/* Content section with image and text in a grid layout */}
        <div className='about-content '>
          
          {/* Image section */}
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          
          {/* Text content about the app */}
          <div className='about-text'>  
            <h2 className='about-title fs-26 ls-1'>About Book Finder App</h2>
            <p className='fs-17'>
              Welcome to our Book Finder App Portal! We provide easy access to a vast collection of e-books, journals, research databases, and multimedia resources. Our mission is to support your learning, research, and personal growth by delivering reliable information and user-friendly services. Discover, explore, and connect with knowledge at your fingertips—anytime, anywhere.            
              </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage;
