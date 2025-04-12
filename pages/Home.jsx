import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <div className="container">
          <h1>Welcome to Path2Learn</h1>
          <p>Your personalized learning journey starts here</p>
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-outline">Register</Link>
          </div>
        </div>
      </header>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose Path2Learn?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-user-graduate"></i>
              <h3>For Students</h3>
              <p>Personalized learning plans, homework tracking, and AI-powered assistance.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-chalkboard-teacher"></i>
              <h3>For Teachers</h3>
              <p>Comprehensive student tracking, assignment management, and performance analytics.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>For Parents</h3>
              <p>Real-time updates on your child's progress, attendance, and performance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;