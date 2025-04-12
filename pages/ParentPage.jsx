import React, {useState} from 'react';
import Navbar from '../components/common/Navbar';
import ParentDashboard from '../components/parent/ParentDashboard';
import '../styles/parent.css';

const ParentPage = () => {
  return (
    <div className="parent-page">
      <Navbar role="parent" />
      <div className="container">
        <ParentDashboard />
      </div>
    </div>
  );
};

export default ParentPage;