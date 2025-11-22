import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container">
        <Navbar />
      </div>
    </header>
  )
}

const styles = {
  header: {
    position: 'fixed',
    top: '0',
    width: '100%',
    zIndex: '1000',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  }
}

export default Header
