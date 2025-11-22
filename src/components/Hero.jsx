import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text">
            <div className="badge slide-in-left">
              <span>New Collection 2024</span>
            </div>
            
            <h1 className="hero-title">
              Step Into
              <span className="highlight"> Style</span>
              <br />
              Perfect Shoes Await
            </h1>
            
            <p className="hero-subtitle slide-in-up">
              Discover the perfect blend of comfort and fashion. 
              From sneakers to formal wear, find your perfect pair.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary bounce-in">
                Shop Collection
              </button>
              <button className="btn-secondary fade-in">
                <span className="play-icon">▶</span>
                Watch Story
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat zoom-in">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat zoom-in" style={{animationDelay: '0.2s'}}>
                <span className="stat-number">500+</span>
                <span className="stat-label">Premium Designs</span>
              </div>
              <div className="stat zoom-in" style={{animationDelay: '0.4s'}}>
                <span className="stat-number">50+</span>
                <span className="stat-label">Awards Won</span>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="hero-image">
            <div className="glass-card flip-in">
              <div className="shoe-display">
                <div className="shoe-image"></div>
                <div className="floating-badge">
                  <span>Bestseller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
