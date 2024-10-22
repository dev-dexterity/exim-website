import React from 'react';
import Navbar from './components/navber/navbar'
import Hero from './components/Hero/hero'
import Services from './components/Services/services'
import Title from '../src/components/Title/title'
import About from '../src/components/About/about'
import Products from '../src/components/Products/products'
import Contact from '../src/components/Contact/contact'
import Footer from '../src/components/Footer/footer'
import Owner from '../src/components/Owner/owner'



const App = () => {

  return (
    <div>     
      <Navbar />
      <Hero />
      <div className="container">
          <Title subTitle='Our Services' title='What we Offer' />
          <Services />
          <About />
          <Title subTitle='Our Products' title='What we Have' />
          <Products />
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
          <Title subTitle='proprietor' title='Owners' />
          <Owner />
          <Footer />
      </div>
    </div>
  )
}



export default App
