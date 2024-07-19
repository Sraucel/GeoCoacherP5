import React from 'react';
import './navbar.css';
import logo from '../pictures/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="GeoCoacher Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#get-involved">Get Involved</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
