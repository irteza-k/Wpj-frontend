// src/components/DashboardLayout.jsx

//import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/DashboardLayout.css'; // Make sure this CSS file is created

function DashboardLayout({ children }) {
  const location = useLocation(); // To highlight active link

  // This is a simplified list of menu items from the image
  const navItems = [
    { name: 'Expert Dashboard', icon: '📊', path: '/profile/dashboard', new: false },
    { name: 'Home', icon: '🏠', path: '/profile/home', new: false }, // Could be a sub-dashboard home
    { name: 'Bookings', icon: '📅', path: '/profile/bookings', new: false },
    { name: 'Priority DM', icon: '💬', path: '/profile/priority-dm', new: false },
    { name: 'Testimonials', icon: '⭐', path: '/profile/testimonials', new: false },
    { name: 'Calendar', icon: '🗓️', path: '/profile/calendar', new: false },
    { name: 'Services', icon: '💡', path: '/profile/services', new: false },
    { name: 'Analytics', icon: '📈', path: '/profile/analytics', new: false },
    { name: 'Marketing', icon: '📣', path: '/profile/marketing', new: true }, // Example 'New' badge
    { name: 'Payments', icon: '💳', path: '/profile/payments', new: false },
    { name: 'Checkout', icon: '🛒', path: '/profile/checkout', new: false },
    { name: 'Profile', icon: '👤', path: '/profile', new: false }, // Main profile page
    { name: 'Achievements', icon: '🏅', path: '/profile/achievements', new: true }, // Example 'New' badge
    { name: 'What\'s New', icon: '✨', path: '/profile/whats-new', new: false },
  ];

  return (
    <div className="dashboard-layout">
      {/* Top Bar (simulating the top section of the image with user info) */}
      <div className="dashboard-topbar">
        <div className="topbar-left">
          {/* Removed email */}
          <span className="user-email"></span> 
          <span className="expert-dashboard-link">
            <Link to="/profile/dashboard">
              <span className="icon">📊</span> Expert Dashboard <span className="arrow">↓</span>
            </Link>
          </span>
        </div>
        <div className="topbar-right">
          {/* Removed user name */}
          <span className="greeting">Hi,</span>
          {/* Placeholder for "Share the Stories of Your Impact" button */}
          <button className="share-impact-btn">Share the Stories of Your Impact</button>
          {/* Removed topmate.io link */}
          {/* Removed profile image / notification icon */}
          <img src="https://via.placeholder.com/40" alt="User Profile" className="topbar-profile-pic" />
        </div>
      </div>

      {/* Main content area: Sidebar + Page Content */}
      <div className="dashboard-main-content">
        <aside className="dashboard-sidebar">
          <div className="sidebar-logo">
            <Link to="/"><img src="https://via.placeholder.com/100x30?text=Logo" alt="Logo" /></Link>
          </div>
          <button className="publish-button">
            <span className="icon">🚀</span> Publish on Socials <span className="badge new">New</span>
          </button>
          <nav className="sidebar-nav">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className={location.pathname === item.path ? 'active' : ''}>
                  <Link to={item.path}>
                    <span className="icon">{item.icon}</span> {item.name}
                    {item.new && <span className="badge new">New</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="sidebar-footer">
            <button className="edit-button">
              <span className="icon">✏️</span> Edit <span className="arrow">↗</span>
            </button>
            <div className="profile-enhance-button">
                <button className="enhance-profile-float">
                  Enhance Profile <span className="notification-dot">1</span>
                </button>
            </div>
          </div>
        </aside>

        <div className="dashboard-page-content">
          {children} {/* This is where the actual profile sections will be rendered */}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
