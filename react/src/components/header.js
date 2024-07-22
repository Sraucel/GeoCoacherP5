// src/components/header.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './header.css'; // Ensure you import the CSS file

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLearnButtonClick = () => {
    navigate('/booking'); // Redirect to the FormPage
  };

  return (
    <header className="header">
      <h2>GeoCoacher Geography Services</h2>
      <p>Maps, Lessons or Resources, GeoCoacher gets the job done. More about us below.</p>
      <button 
        className="learn-button" 
        onClick={handleLearnButtonClick}
      >
        Learn Today
      </button>
    </header>
  );
};

export default Header;
