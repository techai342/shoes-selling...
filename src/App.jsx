import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* Yahan aap aur components add kar sakte hain */}
      </main>
      <Footer />
    </div>
  )
}

export default App
