import React from 'react';
import DashboardLayout from './DashboardLayout'; // Path to your layout
import DashboardContent from './DashboardContent'; // Path to your simple dashboard content

function MyDashboardPage() {
  return (
    <DashboardLayout>
      {/* DashboardContent will be rendered as children inside DashboardLayout's main content area */}
      <DashboardContent />
    </DashboardLayout>
  );
}

export default MyDashboardPage;