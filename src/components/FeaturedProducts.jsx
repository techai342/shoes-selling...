import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Air Max Premium',
      category: 'Sneakers',
      price: '$129.99',
      originalPrice: '$159.99',
      image: '👟',
      rating: 4.8,
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
      isNew: true
    },
    {
      id: 2,
      name: 'Jordan Retro',
      category: 'Basketball',
      price: '$199.99',
      originalPrice: '$229.99',
      image: '🏀',
      rating: 4.9,
      colors: ['#FFE66D', '#1A535C', '#4ECDC4'],
      isNew: false
    },
    {
      id: 3,
      name: 'Run Pro Max',
      category: 'Joggers',
      price: '$89.99',
      originalPrice: '$119.99',
      image: '🏃',
      rating: 4.7,
      colors: ['#95E1D3', '#FCE38A', '#EAFFD0'],
      isNew: true
    },
    {
      id: 4,
      name: 'School Comfort',
      category: 'School Shoes',
      price: '$59.99',
      originalPrice: '$79.99',
      image: '🎒',
      rating: 4.6,
      colors: ['#A8E6CF', '#FFD3B6', '#FFAAA5'],
      isNew: false
    }
  ];

  return (
    <section className="featured-products" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title slide-in-up">Featured Products</h2>
          <p className="section-subtitle fade-in">
            Handpicked collection of our best selling shoes
          </p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card zoom-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {product.isNew && <div className="new-badge">NEW</div>}
              <div className="product-image">
                <span className="product-emoji">{product.image}</span>
              </div>
              
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-rating">
                  {'⭐'.repeat(5)}
                  <span className="rating-value">({product.rating})</span>
                </div>
                
                <div className="product-colors">
                  {product.colors.map((color, idx) => (
                    <span 
                      key={idx} 
                      className="color-dot" 
                      style={{backgroundColor: color}}
                    />
                  ))}
                </div>
                
                <div className="product-price">
                  <span className="current-price">{product.price}</span>
                  <span className="original-price">{product.originalPrice}</span>
                </div>
                
                <div className="product-actions">
                  <button className="add-to-cart-btn">Add to Cart</button>
                  <button className="wishlist-btn">❤</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container fade-in">
          <button className="view-all-btn">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
