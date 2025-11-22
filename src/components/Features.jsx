import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Handcrafted with finest materials for ultimate comfort'
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Free shipping worldwide with express options'
    },
    {
      icon: '💎',
      title: 'Exclusive Designs',
      description: 'Limited edition designs you won\'t find anywhere else'
    }
  ]

  return (
    <section style={styles.features} id="features">
      <div className="container">
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  features: {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(20px)',
    padding: '3rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
    transition: 'all 0.3s ease'
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1.5rem'
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#333'
  },
  featureDescription: {
    color: '#666',
    lineHeight: '1.6'
  }
}

// Hover effect
styles.featureCard = {
  ...styles.featureCard,
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(31, 38, 135, 0.2)'
  }
}

export default Features
