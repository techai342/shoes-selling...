import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 style={styles.title}>Welcome to My Website</h1>
        <p style={styles.subtitle}>
          We provide the best services for your business growth and success
        </p>
        <div style={styles.buttons}>
          <button style={styles.primaryButton}>Get Started</button>
          <button style={styles.secondaryButton}>Learn More</button>
        </div>
      </div>
    </section>
  )
}

const styles = {
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: '0.9'
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryButton: {
    padding: '12px 30px',
    fontSize: '1.1rem',
    background: '#fff',
    color: '#667eea',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.3s'
  },
  secondaryButton: {
    padding: '12px 30px',
    fontSize: '1.1rem',
    background: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0
