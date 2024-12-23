import React from 'react';
import Navbar from './components/navber/navbar';
import Hero from './components/Hero/hero';
import Services from './components/Services/services';
import Title from './components/Title/title';
import About from './components/About/about';
import Products from './components/Products/products';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Owner from './components/Owner/owner';
import ProductOne from './components/P1/productOne';
import ProductTwo from './components/P2/productTwo';
import ProductThree from './components/P3/productThree';
import ProductFour from './components/P4/productFour';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      
      <div className="container">
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Title subTitle="Our Services" title="What we Offer" />
                <Services />
                <About />
                <Title subTitle="Our Products" title="What we Have" />
                <Products />
                <Title subTitle="Proprietor" title="The One Behind This" />
                <Owner />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </>
            }
          />
          {/* Additional Route Examples */}
          <Route path="/product-one" element={<ProductOne />}/>
          <Route path="/product-two" element={<ProductTwo />}/>
          <Route path="/product-three" element={<ProductThree />}/>
          <Route path="/product-four" element={<ProductFour />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
