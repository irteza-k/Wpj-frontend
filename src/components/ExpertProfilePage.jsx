import React, { useState, useEffect } from 'react';
import { useParams, Link,useNavigate  } from 'react-router-dom';

// Layout components are now in the same 'components' folder
// import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Other components are also in the same 'components' folder
import Button from './Button.jsx';

// Data is also in the same 'components' folder
import { mockExperts } from './mockExperts.jsx';

import '../styles/ExpertProfilePage.css';// Page-specific CSS

function ExpertProfilePage() {
  const { id } = useParams(); // Get expert ID from URL
  const navigate = useNavigate();  
  const [expert, setExpert] = useState(null);
  const [activeTab, setActiveTab] = useState('about'); // 'about', 'services', 'reviews'

  useEffect(() => {
    const foundExpert = mockExperts.find(exp => exp.id === id);
    setExpert(foundExpert);
  }, [id]);

  /* ---------- helper ---------- */
  const handleBookService = (calendarLink) => {       // ← NEW helper
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
      alert('Please log in or sign up to book a service.');
      navigate('/signup');                            // or '/login'
      return;
    }
    window.open(calendarLink, '_blank');
  };
  /* ---------------------------- */

  if (!expert) {
    return (
      <>
        <div className="expert-profile-container loading-state">
          Loading expert profile or Expert not found...
          <Link to="/experts" className="back-link">Go back to Experts</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="expert-profile-main">
        <div className="expert-profile-header-section">
          <div className="expert-profile-header-content">
            <img src={expert.imageUrl} alt={expert.name} className="profile-image" />
            <div className="header-details">
              <h1>{expert.name}</h1>
              <p className="expert-profile-title">{expert.title}</p>
              <div className="expert-profile-rating">
                ⭐ {expert.rating} ({expert.reviews} reviews)
              </div>
              <p className="expert-short-description">{expert.description}</p>
              <div className="profile-actions">
                
              </div>
            </div>
          </div>
        </div>

        <div className="expert-profile-body-section">
          <div className="profile-tabs">
            <button
              className={activeTab === 'about' ? 'active-tab' : ''}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button
              className={activeTab === 'services' ? 'active-tab' : ''}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button
              className={activeTab === 'reviews' ? 'active-tab' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({expert.reviews})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'about' && (
              <div className="about-expert">
                <h3>About {expert.name}</h3>
                <p>{expert.longBio}</p>
                <div className="expert-category-tag">Category: {expert.category}</div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="expert-services">
                <h3>Services Offered</h3>
                {expert.services?.length ? (
                  expert.services.map(service => (
                    <div key={service.id} className="service-item">
                      <h4>{service.name}</h4>
                      <p>{service.description}</p>
                      
                      <Button
                        variant="primary"
                        size="small"
                        onClick={() => handleBookService(expert.calendarLink)}   // ← uses helper
                      >
                        Book Session
                      </Button>
                    </div>
                  ))
                ) : (
                  <p>No services listed yet.</p>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="expert-reviews">
                <h3>Customer Reviews</h3>
                {expert.reviews > 0 ? (
                  <p>Displaying {expert.reviews} mock reviews. (No actual review data in mock)</p>
                ) : (
                  <p>No reviews yet. Be the first to leave one!</p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ExpertProfilePage;