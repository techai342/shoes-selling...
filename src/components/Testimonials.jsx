import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fashion Blogger',
      rating: 5,
      text: 'The comfort and style of these shoes are unmatched! I\'ve never received so many compliments.',
      avatar: '👩',
      product: 'Air Max Premium'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Professional Runner',
      rating: 5,
      text: 'As a marathon runner, I need reliable shoes. These have exceeded all my expectations!',
      avatar: '👨',
      product: 'Run Pro Max'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'School Teacher',
      rating: 4,
      text: 'Perfect for long days on my feet. The comfort is incredible and they look great too!',
      avatar: '👩‍🏫',
      product: 'School Comfort'
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      role: 'Sneaker Collector',
      rating: 5,
      text: 'The Jordan collection is phenomenal. Authentic, comfortable, and absolutely stunning!',
      avatar: '👨‍💼',
      product: 'Jordan Retro'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title slide-in-up">What Our Customers Say</h2>
          <p className="section-subtitle fade-in">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="testimonials-container">
          <button className="nav-btn prev-btn" onClick={prevTestimonial}>
            ‹
          </button>
          
          <div className="testimonial-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === currentTestimonial ? 'active' : ''
                } ${
                  index === (currentTestimonial - 1 + testimonials.length) % testimonials.length ? 'prev' : ''
                } ${
                  index === (currentTestimonial + 1) % testimonials.length ? 'next' : ''
                }`}
              >
                <div className="testimonial-content">
                  <div className="rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  
                  <div className="testimonial-author">
                    <div className="avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                      <p className="author-product">Bought: {testimonial.product}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="nav-btn next-btn" onClick={nextTestimonial}>
            ›
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
