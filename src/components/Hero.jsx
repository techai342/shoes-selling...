import React from 'react'

const Hero = () => {
  return (
    <section style={styles.hero} id="home">
      {/* Background Elements */}
      <div style={styles.backgroundElements}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
        <div style={styles.circle3}></div>
      </div>
      
      <div className="container">
        <div style={styles.heroContent}>
          {/* Main Content */}
          <div style={styles.textContent}>
            <div style={styles.badge}>
              <span style={styles.badgeText}>New Collection 2024</span>
            </div>
            
            <h1 style={styles.title}>
              Step Into
              <span style={styles.highlight}> Style</span>
              <br />
              With Premium Shoes
            </h1>
            
            <p style={styles.subtitle}>
              Discover the perfect blend of comfort and fashion. 
              Our exclusive collection features handcrafted shoes 
              designed for the modern lifestyle.
            </p>
            
            <div style={styles.buttons}>
              <button style={styles.primaryButton}>
                Explore Collection
              </button>
              <button style={styles.secondaryButton}>
                <span style={styles.playIcon}>▶</span>
                Watch Story
              </button>
            </div>
            
            <div style={styles.stats}>
              <div style={styles.stat}>
                <span style={styles.statNumber}>5K+</span>
                <span style={styles.statLabel}>Happy Customers</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>200+</span>
                <span style={styles.statLabel}>Premium Designs</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Awards Won</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image with Glass Effect */}
          <div style={styles.imageContainer}>
            <div style={styles.glassCard}>
              <div style={styles.shoeImage}></div>
              <div style={styles.floatingBadge}>
                <span style={styles.floatingText}>Bestseller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px'
  },
  backgroundElements: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflow: 'hidden'
  },
  circle1: {
    position: 'absolute',
    top: '10%',
    right: '10%',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)'
  },
  circle2: {
    position: 'absolute',
    bottom: '20%',
    left: '5%',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)'
  },
  circle3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)'
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: '2'
  },
  textContent: {
    color: 'white'
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '0.5rem 1.5rem',
    borderRadius: '50px',
    marginBottom: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  badgeText: {
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1px'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '1.5rem'
  },
  highlight: {
    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: '0.9',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
    maxWidth: '500px'
  },
  buttons: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  },
  primaryButton: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
  },
  secondaryButton: {
    background: 'transparent',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '1rem 2rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  playIcon: {
    fontSize: '0.8rem'
  },
  stats: {
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '0.9rem',
    opacity: '0.8'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    position: 'relative',
    width: '400px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shoeImage: {
    width: '300px',
    height: '300px',
    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
  },
  floatingBadge: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  floatingText: {
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '600'
  }
}

// Hover effects
styles.primaryButton = {
  ...styles.primaryButton,
  ':hover': {
    background: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(31, 38, 135, 0.5)'
  }
}

styles.secondaryButton = {
  ...styles.secondaryButton,
  ':hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)'
  }
}

export default Hero
