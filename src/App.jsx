import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* Add more sections here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
