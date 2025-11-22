import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">ShoeStore</span>
              <span className="logo-dot">.</span>
            </div>
            <p className="footer-description">
              Step into style with our premium collection of shoes. 
              Quality, comfort, and fashion combined.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">TikTok</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Shop</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Sneakers</a>
              <a href="#" className="footer-link">Joggers</a>
              <a href="#" className="footer-link">Jordans</a>
              <a href="#" className="footer-link">School Shoes</a>
              <a href="#" className="footer-link">Formal Shoes</a>
              <a href="#" className="footer-link">Sandals</a>
            </div>
          </div>
          
          {/* Support */}
          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">Shipping Info</a>
              <a href="#" className="footer-link">Returns</a>
              <a href="#" className="footer-link">Size Guide</a>
              <a href="#" className="footer-link">FAQs</a>
              <a href="#" className="footer-link">Track Order</a>
            </div>
          </div>
          
          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Press</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Sustainability</a>
              <a href="#" className="footer-link">Affiliate Program</a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>hello@shoestore.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Shoe Street, Fashion City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2024 ShoeStore. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="bottom-link">Privacy Policy</a>
              <a href="#" className="bottom-link">Terms of Service</a>
              <a href="#" className="bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
