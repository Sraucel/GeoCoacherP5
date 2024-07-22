// src/components/aboutus.js
import React from 'react';
import './aboutus.css';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="aboutus-content">
        
        <h1>Welcome to GeoCoacher! We are dedicated to providing top-notch geography tutoring services to help you excel. Our team of experts is here to guide you 
            through complex geographical concepts and make learning an enjoyable experience.</h1>
        
        <h2>Our Mission</h2>
        <p>At GeoCoacher, our mission is to bridge the gap in geography education through personalized tutoring and interactive learning resources. We aim to foster a 
            deeper understanding of geographical concepts and cultivate a passion for the subject.</p>
        
        <h2>What We Offer</h2>
        <ul>
          <li>One-on-One Tutoring</li>
          <li>Interactive Maps and Tools</li>
          <li>Customizable Learning Plans</li>
          <li>Comprehensive Study Materials</li>
        </ul>
        
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to book a session, feel free to <a href="/booking">contact us</a>.</p>
      </div>
    </div>
  );
};

export default AboutUs;
