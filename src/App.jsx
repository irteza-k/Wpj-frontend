import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// All pages are now imported from 'src/components/'
import HomePage from './components/HomePage.jsx';
import ExpertListingPage from './components/ExpertListingPage.jsx';
import ExpertProfilePage from './components/ExpertProfilePage.jsx';
import Login from './components/Login';
import Signup from './components/Signup';
import JoinAsExpert from './components/JoinAsExpert';
import AboutUs from './components/AboutUs.jsx';      
import ContactUs from './components/ContactUs.jsx';  
import FAQ from './components/FAQ.jsx'; 
import './styles/index.css';
import Header from './components/Header.jsx';
import MyDashboardPage from './components/MyDashboardPage';
import './styles/index.css';
import './styles/DashboardLayout.css'; 
import './styles/DashboardContent.css';


function App() {
  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experts" element={<ExpertListingPage />} />
        <Route path="/expert/:id" element={<ExpertProfilePage />} />
        <Route path="/about" element={<AboutUs />} />      {/* Add route for About Us */}
            <Route path="/contact" element={<ContactUs />} />  {/* Add route for Contact Us */}
            <Route path="/faq" element={<FAQ />} />      
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/join-as-expert" element={<JoinAsExpert />} />
        <Route path="/dashboard" element={<MyDashboardPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;