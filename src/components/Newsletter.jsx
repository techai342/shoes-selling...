import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content fade-in">
          <div className="newsletter-text">
            <h2 className="newsletter-title">Stay in the Loop</h2>
            <p className="newsletter-description">
              Subscribe to get exclusive offers, new product launches, and style tips delivered to your inbox.
            </p>
            
            {!isSubscribed ? (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="subscribe-btn">
                    Subscribe
                  </button>
                </div>
                <p className="newsletter-note">
                  No spam ever. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="success-message bounce-in">
                <span className="success-icon">🎉</span>
                <h3>Welcome to the Family!</h3>
                <p>Thank you for subscribing. Check your email for a special welcome offer!</p>
              </div>
            )}
          </div>
          
          <div className="newsletter-visual">
            <div className="floating-envelope">✉️</div>
            <div className="floating-shoe">👟</div>
            <div className="floating-tag">🏷️</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
