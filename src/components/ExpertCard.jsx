import React from 'react';
import '../styles/ExpertCard.css'; 

// src/components/ExpertCard.jsx

import { Link } from 'react-router-dom'; // Assuming ExpertCard links to ExpertProfilePage
import '../styles/ExpertCard.css'; // Correct path from src/components/ to src/styles/

function ExpertCard({ expert }) {
  if (!expert) {
    return null; // Or handle empty expert prop gracefully
  }

  return (
    <div className="expert-card">
      <img src={expert.imageUrl} alt={expert.name} className="expert-card-image" />
      <div className="expert-card-info">
        <h3 className="expert-card-name">{expert.name}</h3>
        <p className="expert-card-title">{expert.title}</p>
        <p className="expert-card-category">{expert.category}</p>
        <div className="expert-card-rating">
          ⭐ {expert.rating} ({expert.reviews} reviews)
        </div>
        {/* The description should ideally be shorter for a card, but keeping it for consistency */}
        <p className="expert-card-description">{expert.description}</p>
        <Link to={`/expert/${expert.id}`} className="expert-card-button">View Profile</Link>
      </div>
    </div>
  );
}

export default ExpertCard;