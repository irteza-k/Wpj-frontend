
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Layout components are now in the same 'components' folder
//import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Other components are also in the same 'components' folder
import ExpertCard from './ExpertCard.jsx';
import Button from './Button.jsx';

// Data is also in the same 'components' folder
import { mockExperts, mockCategories } from './mockExperts.jsx';

import '../styles/ExpertListingPage.css'; // Page-specific CSS (path relative to ExpertListingPage.jsx)

function ExpertListingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredExperts = mockExperts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          expert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          expert.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || expert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      
      <main className="expert-listing-main">
        <section className="listing-hero">
          <h1>Find Your Perfect Mentor</h1>
          <p>Browse through our handpicked list of experts and connect with them.</p>
          <div className="listing-search-filter">
            <input
              type="text"
              placeholder="Search by name, skill, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {mockCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <Button variant="primary">Search</Button>
          </div>
        </section>

        <section className="expert-results-section">
          <h2>Available Experts ({filteredExperts.length})</h2>
          {filteredExperts.length > 0 ? (
            <div className="experts-grid-listing">
              {filteredExperts.map(expert => (
                <Link to={`/expert/${expert.id}`} key={expert.id} className="expert-card-link">
                    <ExpertCard expert={expert} />
                </Link>
              ))}
            </div>
          ) : (
            <p className="no-results">No experts found matching your criteria. Try adjusting your search or filters.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ExpertListingPage;