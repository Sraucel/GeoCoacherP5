// src/components/FormPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './formpage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'tutoring',
    details: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to confirmation page with form data
    navigate('/confirmation', { state: { formData } });
  };

  return (
    <div className="form-page">
      <div className="form-image"></div>
      <div className="form-container">
        <h1>Booking</h1>
        <h2>Please fill out this form with your requested service and more details about yourself. We will get back to you once we process your request.</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} required>
              <option value="tutoring-basic">Tutoring - Basic</option>
              <option value="tutoring-premium">Tutoring - Premium</option>
              <option value="tutoring-vip">Tutoring - VIP</option>
              <option value="coaching-basic">Coaching - Basic</option>
              <option value="coaching-advanced">Coaching - Advanced</option>
              <option value="coaching-competitive">Coaching - Competitive</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="details">Additional Details and Questions</label>
            <textarea id="details" name="details" value={formData.details} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
