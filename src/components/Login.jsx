// src/components/Login.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Login form submitted');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
