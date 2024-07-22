// src/components/Confirmation.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-page">
      <h1>Confirmation Received!</h1>
      <p>We have received your request and you will be contacted shortly for further action. Here are the details:</p>
      <div className="confirmation-details">
        <p><strong>Name:</strong> {formData?.name}</p>
        <p><strong>Email:</strong> {formData?.email}</p>
        <p><strong>Service Needed:</strong> {formData?.service}</p>
        <p><strong>Additional Details:</strong> {formData?.details}</p>
      </div>
      <button onClick={handleGoHome}>Home</button>
    </div>
  );
};

export default Confirmation;
