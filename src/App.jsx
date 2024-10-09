import React from 'react'
import Navbar from './components/navber/navbar'
import Hero from './components/Hero/hero'
import Services from './components/Services/services'
import Title from '../src/components/Title/title'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="container">
        <Title subTitle = 'Our Services' title= 'What we Offer'/>
        <Services />
      </div>
    </div>
  )
}

export default App
