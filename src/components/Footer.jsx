import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <div style={styles.logo}>
              <span style={styles.logoText}>ShoeStore</span>
              <span style={styles.logoDot}>.</span>
            </div>
            <p style={styles.footerDescription}>
              Premium footwear for the modern lifestyle. 
              Step into style with our exclusive collection.
            </p>
          </div>
          
          <div style={styles.footerLinks}>
            <div style={styles.linkGroup}>
              <h4 style={styles.linkTitle}>Shop</h4>
              <a href="#" style={styles.link}>Men's Shoes</a>
              <a href="#" style={styles.link}>Women's Shoes</a>
              <a href="#" style={styles.link}>New Arrivals</a>
              <a href="#" style={styles.link}>Best Sellers</a>
            </div>
            
            <div style={styles.linkGroup}>
              <h4 style={styles.linkTitle}>Support</h4>
              <a href="#" style={styles.link}>Contact Us</a>
              <a href="#" style={styles.link}>Shipping Info</a>
              <a href="#" style={styles.link}>Returns</a>
              <a href="#" style={styles.link}>Size Guide</a>
            </div>
            
            <div style={styles.linkGroup}>
              <h4 style={styles.linkTitle}>Company</h4>
              <a href="#" style={styles.link}>About Us</a>
              <a href="#" style={styles.link}>Careers</a>
              <a href="#" style={styles.link}>Press</a>
              <a href="#" style={styles.link}>Blog</a>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>
            &copy; 2024 ShoeStore. All rights reserved.
          </p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink}>Instagram</a>
            <a href="#" style={styles.socialLink}>Twitter</a>
            <a href="#" style={styles.socialLink}>Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '60px 0 30px'
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '4rem',
    marginBottom: '3rem'
  },
  footerSection: {
    maxWidth: '300px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  logoText: {
    color: 'white'
  },
  logoDot: {
    color: '#ffd700'
  },
  footerDescription: {
    opacity: '0.8',
    lineHeight: '1.6'
  },
  footerLinks: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem'
  },
  linkGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
  },
  linkTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  link: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)'
  },
  copyright: {
    opacity: '0.8'
  },
  socialLinks: {
    display: 'flex',
    gap: '2rem'
  },
  socialLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  }
}

// Hover effects
styles.link = {
  ...styles.link,
  ':hover': {
    color: 'white',
    transform: 'translateX(5px)'
  }
}

styles.socialLink = {
  ...styles.socialLink,
  ':hover': {
    color: 'white'
  }
}

export default Footer
