import React, { useState } from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('sneakers');

  const showcaseData = {
    sneakers: {
      title: 'Premium Sneakers',
      description: 'Experience ultimate comfort with our advanced cushioning technology and breathable materials.',
      features: ['Advanced Cushioning', 'Breathable Material', 'Lightweight Design', 'Durable Sole'],
      image: '👟',
      stats: ['98%', 'Comfort Score', '2M+', 'Sold Worldwide']
    },
    joggers: {
      title: 'Running Joggers',
      description: 'Perfect for your active lifestyle with enhanced support and flexible movement.',
      features: ['Enhanced Support', 'Flexible Movement', 'Sweat Resistant', 'Shock Absorption'],
      image: '🏃',
      stats: ['95%', 'Performance', '1.5M+', 'Active Users']
    },
    jordans: {
      title: 'Limited Jordans',
      description: 'Exclusive designs that combine style with heritage basketball performance.',
      features: ['Limited Edition', 'Premium Materials', 'Heritage Design', 'Collector Items'],
      image: '🏀',
      stats: ['99%', 'Authenticity', '500K+', 'Collectors']
    },
    school: {
      title: 'School Comfort',
      description: 'Designed for all-day comfort and durability for growing feet.',
      features: ['All-day Comfort', 'Durable Build', 'Easy to Clean', 'Supportive Fit'],
      image: '🎒',
      stats: ['97%', 'Durability', '800K+', 'Happy Students']
    }
  };

  const currentData = showcaseData[activeTab];

  return (
    <section className="product-showcase">
      <div className="container">
        <div className="showcase-content">
          {/* Text Content */}
          <div className="showcase-text slide-in-left">
            <div className="tabs">
              {Object.keys(showcaseData).map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {showcaseData[tab].title}
                </button>
              ))}
            </div>
            
            <h2 className="showcase-title">{currentData.title}</h2>
            <p className="showcase-description">{currentData.description}</p>
            
            <div className="features-list">
              {currentData.features.map((feature, index) => (
                <div key={index} className="feature-item fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <span className="feature-check">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="showcase-stats">
              {currentData.stats.map((stat, index) => (
                <div key={index} className="stat-item zoom-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <span className="stat-number">{stat}</span>
                </div>
              ))}
            </div>
            
            <div className="showcase-actions">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="showcase-visual slide-in-right">
            <div className="floating-card">
              <div className="main-product">
                <span className="product-emoji-large">{currentData.image}</span>
              </div>
              
              <div className="floating-elements">
                <div className="floating-element element-1">⭐ Premium</div>
                <div className="floating-element element-2">🔥 Trendy</div>
                <div className="floating-element element-3">💫 Comfort</div>
              </div>
              
              <div className="rotating-ring ring-1"></div>
              <div className="rotating-ring ring-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
