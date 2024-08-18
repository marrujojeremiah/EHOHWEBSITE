import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import headerVideo from './header.ehoh.mp4';
import ladyPic from './ladypic.jpg';
import AboutUs from './AboutUs';
import Careers from './Careers'; // Make sure this import is correct

function App() {
  return (
    <Router>
      <div>
        <div className="top-bar">
          <div className="logo">
            <h2>***Sight Under Construction***</h2>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            {/* Add other links here as needed */}
          </ul>
          <button className="phone-button">619-825-6159</button>
        </div>

        <Routes>
          <Route path="/" element={
            <>
              <header className="header">
                <div className="video-container">
                  <video autoPlay muted loop className="header-video">
                    <source src={headerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </header>

              <div className="header-container">
                <div className="header-content">
                  <div className="location-box">
                    <h3>Locations:</h3>
                    <p><span className="address-number">13706 Whispering Meadows Ln, Jamul, CA 91935</span></p>
                    <p className="phone-number">Call us: 619-825-6159</p>
                    <p className="fax-number">Fax: 619-303-3055</p> 
                    <button className="get-started-button">Get Started</button>
                  </div>
                </div>
                <div className="image-container">
                  <img src={ladyPic} alt="Lady" className="lady-pic" />
                </div>
              </div>

              <section className="about-us" id="about-us">
                <h2>Exceptional Care at Home for individuals</h2>
                <p>
                  First, we get to know you and your care needs, then we design a flexible yet detailed Care Plan just for you.
                  You’ll get the in-home care solution you need—and always be informed and in control.
                </p>
              </section>

              <section className="services" id="services">
                <h2>Our Services</h2>
                <div className="service-list">
                  <div className="service-item">
                    <h3>Home Care</h3>
                    <p>From a few hours a day to 24/7 support, we’ll design a Care Plan to meet your specific needs.</p>
                  </div>
                  <div className="service-item">
                    <h3>Individual Care and safety at Home</h3>
                    <p>Our caregivers are expertly trained to support people living with any type of developmental disabilities.</p>
                  </div>
                  <div className="service-item">
                    <h3>Specialized Care</h3>
                    <p>We support people living with specific medical conditions and unique needs.</p>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
