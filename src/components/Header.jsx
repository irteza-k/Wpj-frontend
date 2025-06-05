import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css'; // Header.css is in src/styles/
import Button from './Button.jsx';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">CDAC ConNecT</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/experts">Find Experts</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            
          </ul>
        </nav>
        <div className="auth-buttons">
         <Button variant="secondary" size="small" onClick={() => navigate('/login')}>Login</Button>
          <Button variant="primary" size="small" onClick={() => navigate('/signup')}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;