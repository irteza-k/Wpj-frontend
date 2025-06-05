
import React from 'react';

// Layout components are now in the same 'components' folder
// import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Other components are also in the same 'components' folder
import ExpertCard from './ExpertCard.jsx'; // Correct, because ExpertCard is in the same folder
import Button from './Button.jsx';

import { useNavigate } from 'react-router-dom';


// Data is also in the same 'components' folder
import { mockExperts, mockCategories } from './mockExperts.jsx';

import '../styles/HomePage.css';
//import { mockExperts, mockCategories } from '../../data/mockExperts.js';

function HomePage() {
     const navigate = useNavigate();  // <--- useNavigate hook here

  const handleBecomeExpert = () => {
    navigate('/signup');  // navigate to signup page on button click
  };


  return (
    <>
      
      <main className="homepage-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Discover & Connect with Top Experts for 1-on-1 Mentorship</h1>
            <p>Accelerate your career, get personalized advice, and unlock your potential with industry leaders.</p>
            <div className="search-bar-container">
              <input type="text" placeholder="Search for experts, skills, or categories..." />
              <Button variant="primary" size="large">Search</Button>
            </div>
            <div className="popular-categories">
                Popular:
                {mockCategories.slice(0, 5).map(category => ( // Show first 5 categories
                    <span key={category} className="category-tag">{category}</span>
                ))}
            </div>
          </div>
          <div className="hero-image">
            <img src="https://via.placeholder.com/600x400?text=Hero+Illustration" alt="Connect with Experts" />
          </div>
        </section>

        <section className="featured-experts-section">
          <h2>Handpicked Experts for Your Growth</h2>
          <div className="experts-grid">
            {mockExperts.slice(0, 4).map(expert => ( // Show first 4 experts on homepage
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
          <Button variant="secondary" size="large" onClick={() => console.log('Navigate to All Experts')}>View All Experts</Button>
        </section>

        <section className="how-it-works-section">
            <h2>How It Works</h2>
            <div className="steps-container">
                <div className="step-card">
                    <div className="step-icon">💡</div>
                    <h3>1. Find Your Expert</h3>
                    <p>Browse through hundreds of vetted professionals across various domains.</p>
                </div>
                <div className="step-card">
                    <div className="step-icon">🗓️</div>
                    <h3>2. Book a Session</h3>
                    <p>Schedule a convenient time for a personalized 1-on-1 video call.</p>
                </div>
                <div className="step-card">
                    <div className="step-icon">🚀</div>
                    <h3>3. Get Guidance</h3>
                    <p>Gain insights, clear doubts, and get actionable advice to accelerate your journey.</p>
                </div>
            </div>
        </section>

        <section className="call-to-action-experts">
            <h2>Are You an Expert? Share Your Knowledge!</h2>
            <p>Join our platform and connect with aspiring professionals seeking your valuable insights.</p>
             <Button variant="primary" size="large" onClick={handleBecomeExpert}>
            Become an Expert
          </Button>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default HomePage;