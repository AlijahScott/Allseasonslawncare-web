import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>All Seasons Lawn Care</h3>
            <p>Professional lawn care services for every season. We bring beauty to your outdoor space.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>(330) 217-2935</li>
              <li>Allseasonlawncare419@gmail.com</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📱</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} All Seasons Lawn Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 