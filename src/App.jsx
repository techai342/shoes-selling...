import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <ProductShowcase />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
export default App;
