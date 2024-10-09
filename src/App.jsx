import React from 'react'
import Navbar from './components/navber/navbar'
import Hero from './components/Hero/hero'
import Services from './components/Services/services'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="container">
        <Services />
      </div>
    </div>
  )
}

export default App
