// src/components/DashboardContent.jsx

import React from 'react';
import '../styles/DashboardContent.css'; // Link to its styles

function DashboardContent() {
  return (
    <div className="simple-dashboard-content">
      <h2>Welcome to Your Dashboard!</h2>
      <p>This is where you'll manage your expert activities and view booked sessions.</p>
      
      <div className="booked-sessions-placeholder">
        <h3>Your Booked Sessions</h3>
        <p>Your upcoming and past booked sessions will appear here once you're logged in and have scheduled interactions.</p>
        <p>Stay tuned for updates!</p>
        {/* In the future, this is where you'll loop through session data: */}
        {/* <ul>
          {sessions.map(session => (
            <li key={session.id}>{session.title} - {session.date}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default DashboardContent;