import React from 'react'
import Navbar from './components/navber/navbar'
import Hero from './components/Hero/hero'
import Services from './components/Services/services'
import Title from '../src/components/Title/title'
import About from '../src/components/About/about'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="container">
        <Title subTitle = 'Our Services' title= 'What we Offer'/>
        <Services />
        <About />
      </div>
    </div>
  )
}

export default App
