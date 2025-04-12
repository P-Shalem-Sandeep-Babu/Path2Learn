import React, {useState} from 'react';
import '../../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Path2Learn</h4>
            <p>Your personalized learning journey starts here</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p><i className="fas fa-envelope"></i> support@path2learn.com</p>
            <p><i className="fas fa-phone"></i> +1 (123) 456-7890</p>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Path2Learn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;