import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  if (isLoading) {
    return (
      <div className="app-loading">
        <div className="loading-container">
          <div className="loading-logo">
            <span className="logo-text">ShoeStore</span>
            <span className="logo-dot">.</span>
          </div>
          <LoadingSpinner size="large" />
          <p className="loading-text">Stepping into Style...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Header */}
      <ScrollAnimation animation="slide-in-down">
        <Header />
      </ScrollAnimation>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Categories Section */}
        <section id="categories">
          <ScrollAnimation animation="fade-in">
            <Categories />
          </ScrollAnimation>
        </section>

        {/* Featured Products */}
        <section id="products">
          <ScrollAnimation animation="slide-in-up">
            <FeaturedProducts />
          </ScrollAnimation>
        </section>

        {/* Product Showcase */}
        <ScrollAnimation animation="zoom-in">
          <ProductShowcase />
        </ScrollAnimation>

        {/* Testimonials */}
        <section id="testimonials">
          <ScrollAnimation animation="fade-in">
            <Testimonials />
          </ScrollAnimation>
        </section>

        {/* Newsletter */}
        <ScrollAnimation animation="slide-in-up">
          <Newsletter />
        </ScrollAnimation>
      </main>

      {/* Footer */}
      <section id="contact">
        <ScrollAnimation animation="fade-in">
          <Footer />
        </ScrollAnimation>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

// Scroll to Top Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className="scroll-arrow">↑</span>
      <div className="scroll-pulse"></div>
    </button>
  );
};

export default App;
