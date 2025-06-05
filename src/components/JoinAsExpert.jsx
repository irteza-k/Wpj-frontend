// src/components/JoinAsExpert.jsx

import React from 'react';
import '../styles/JoinAsExpert.css';

function JoinAsExpert() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling expert applications
    console.log('Join as expert form submitted');
  };

  return (
    <div className="join-expert-container">
      <h2>Join Our Platform as an Expert</h2>
      <p>Share your expertise and connect with users seeking guidance.</p>
      <form onSubmit={handleSubmit} className="join-expert-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="expertise">Area of Expertise:</label>
          <input type="text" id="expertise" name="expertise" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Briefly Describe Your Experience:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit" className="join-expert-button">Submit Application</button>
      </form>
    </div>
  );
}

export default JoinAsExpert;
