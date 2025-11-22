import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <div className="logo">
            <span className="logo-text">ShoeStore</span>
            <span className="logo-dot">.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#categories" className="nav-link">Categories</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <button className="search-btn">
              <span className="search-icon">🔍</span>
            </button>
            <button className="cart-btn">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">3</span>
            </button>
            <button className="auth-btn">Login</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="mobile-link">Home</a>
          <a href="#categories" className="mobile-link">Categories</a>
          <a href="#products" className="mobile-link">Products</a>
          <a href="#testimonials" className="mobile-link">Reviews</a>
          <a href="#contact" className="mobile-link">Contact</a>
          <div className="mobile-actions">
            <button className="auth-btn">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
