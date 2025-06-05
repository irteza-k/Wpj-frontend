// src/components/Signup.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {
  const [isMentor, setIsMentor] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Collect form data here
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      isMentor: isMentor
    };

    // Log it (later send to backend or state manager)
    console.log('Signup form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group checkbox-group">
          <label>
            Are you a mentor/alumni?&nbsp;
            <input
              type="checkbox"
              checked={isMentor}
              onChange={(e) => setIsMentor(e.target.checked)}
            />
          </label>
        </div>

        <button type="submit" className="signup-button">Create Account</button>
      </form>

      <p className="login-link">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default Signup;
