import React from 'react';
import './formpage.css';

const FormPage = () => {
  return (
    <div className="form-page">
      <div className="form-image"></div>
      <div className="form-container">
        <h1>Tutoring & Coaching Services</h1>
        <h2>Please fill out this form with your requested service and more details about yourself. We will get back to you once we process your request.</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Needed</label>
            <select id="service" name="service" required>
              <option value="tutoring">Tutoring</option>
              <option value="coaching">Coaching</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="details">Additional Details</label>
            <textarea id="details" name="details"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
