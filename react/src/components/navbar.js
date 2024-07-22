import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../pictures/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="GeoCoacher Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/booking" className="booking-link">Booking</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
