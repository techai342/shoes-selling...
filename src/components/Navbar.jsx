
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <h2>MyWebsite</h2>
      </div>
      
      <div style={{...styles.navLinks, ...(isMenuOpen ? styles.navLinksMobile : {})}}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#services" style={styles.navLink}>Services</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </div>

      <button 
        style={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
    position: 'relative'
  },
  logo: {
    color: '#333'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    transition: 'color 0.3s'
  },
  menuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  navLinksMobile: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    background: 'white',
    padding: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }
}

// Responsive styles
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(max-width: 768px)')
  if (mediaQuery.matches) {
    styles.navLinks.display = 'none'
    styles.menuButton.display = 'block'
  }
}

export default Navbar
