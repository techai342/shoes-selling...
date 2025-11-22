import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Sneakers',
      image: '👟',
      description: 'Casual & Sports',
      count: '200+ Products'
    },
    {
      id: 2,
      name: 'Joggers',
      image: '🏃',
      description: 'Running & Training',
      count: '150+ Products'
    },
    {
      id: 3,
      name: 'Jordans',
      image: '🏀',
      description: 'Limited Edition',
      count: '50+ Products'
    },
    {
      id: 4,
      name: 'School Shoes',
      image: '🎒',
      description: 'Comfort & Style',
      count: '100+ Products'
    },
    {
      id: 5,
      name: 'Formal',
      image: '👞',
      description: 'Office & Events',
      count: '80+ Products'
    },
    {
      id: 6,
      name: 'Sandals',
      image: '🩴',
      description: 'Summer Collection',
      count: '120+ Products'
    }
  ];

  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title slide-in-up">Shop By Category</h2>
          <p className="section-subtitle fade-in">
            Explore our wide range of shoe categories
          </p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="category-card flip-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="category-icon">{category.image}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">{category.description}</p>
              <span className="category-count">{category.count}</span>
              <button className="category-btn">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
