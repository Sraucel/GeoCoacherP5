import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h2>GeoCoacher Geography Services</h2>
      <p>Maps, Lessons or Resources, GeoCoacher gets the job done.</p>
      <a href="#learn-more" className="learn-button">Learn Today</a>
    </header>
  );
};

export default Header;
