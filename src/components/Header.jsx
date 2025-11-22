import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'categories', 'products', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveLink(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'categories', label: 'Categories', icon: '👟' },
    { id: 'products', label: 'Products', icon: '🛍️' },
    { id: 'testimonials', label: 'Reviews', icon: '⭐' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Logo with Animation */}
          <div className="logo" onClick={() => handleLinkClick('home')}>
            <span className="logo-text">ShoeStore</span>
            <span className="logo-dot">.</span>
            <div className="logo-pulse"></div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
                <div className="nav-indicator"></div>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="nav-actions">
            {/* Search Button */}
            <div className="search-container">
              <button className="search-btn">
                <span className="search-icon">🔍</span>
              </button>
              <div className="search-dropdown">
                <input 
                  type="text" 
                  placeholder="Search shoes, brands..." 
                  className="search-input"
                />
                <div className="search-suggestions">
                  <div className="suggestion">Sneakers</div>
                  <div className="suggestion">Jordans</div>
                  <div className="suggestion">Running Shoes</div>
                </div>
              </div>
            </div>

            {/* Cart with Badge */}
            <div className="cart-container">
              <button className="cart-btn">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">3</span>
                <div className="cart-pulse"></div>
              </button>
              <div className="cart-dropdown">
                <div className="cart-items">
                  <div className="cart-item">
                    <span className="item-emoji">👟</span>
                    <div className="item-info">
                      <span className="item-name">Air Max Premium</span>
                      <span className="item-price">$129.99</span>
                    </div>
                    <button className="remove-item">×</button>
                  </div>
                  <div className="cart-item">
                    <span className="item-emoji">🏃</span>
                    <div className="item-info">
                      <span className="item-name">Run Pro Max</span>
                      <span className="item-price">$89.99</span>
                    </div>
                    <button className="remove-item">×</button>
                  </div>
                </div>
                <div className="cart-total">
                  <span>Total: $219.98</span>
                </div>
                <button className="checkout-btn">Checkout</button>
              </div>
            </div>

            {/* User Actions */}
            <div className="user-actions">
              <button className="wishlist-btn">
                <span className="wishlist-icon">❤</span>
                <span className="wishlist-count">5</span>
              </button>
              
              <div className="auth-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                <span className="mobile-icon">{link.icon}</span>
                <span className="mobile-label">{link.label}</span>
                <div className="mobile-indicator"></div>
              </a>
            ))}
            
            <div className="mobile-actions">
              <div className="mobile-search">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="mobile-search-input"
                />
              </div>
              <div className="mobile-buttons">
                <button className="mobile-cart">
                  <span>🛒 Cart (3)</span>
                </button>
                <button className="mobile-wishlist">
                  <span>❤ Wishlist (5)</span>
                </button>
              </div>
              <div className="mobile-auth">
                <button className="mobile-login">Login</button>
                <button className="mobile-signup">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
