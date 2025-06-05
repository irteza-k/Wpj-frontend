import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Footer.css is in src/styles/


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>Topmate Replica</h3>
          <p>
            Connect with industry leaders and accelerate your career.
            Get personalized mentorship, advice, and support.
          </p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>For Experts</h3>
          <ul>
            <li><Link to="/signup">Join as an Expert</Link></li>
            <li><Link to="/expert-faq">Expert FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Topmate Replica. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;