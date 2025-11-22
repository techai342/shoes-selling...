import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <div style={styles.socialLinks}>
          <a href="#" style={styles.socialLink}>Facebook</a>
          <a href="#" style={styles.socialLink}>Twitter</a>
          <a href="#" style={styles.socialLink}>Instagram</a>
          <a href="#" style={styles.socialLink}>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  socialLinks: {
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  socialLink: {
    color: '#fff',
    textDecoration: 'none',
    opacity: '0.8',
    transition: 'opacity 0.3s'
  }
}

export default Footer
