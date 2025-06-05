// src/components/ContactUs.jsx

import React from 'react';
import '../styles/ContactUs.css';

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // In a real application, you'd send this data to your backend
    console.log('Contact form submitted');
    // You might clear the form here
    event.target.reset(); // Resets the form fields
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;