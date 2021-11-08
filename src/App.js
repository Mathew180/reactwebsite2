import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { Hero } from './components/Hero';

import Products from './components/Products';
import { productData, productData2 } from './components/Products/data';
import  AdsArt from './components/AdsArt';
import Footer from './components/Footer';


function App() {
  return (
    
    <Router>
   
      <GlobalStyle />
      <Hero />

      <Products heading="Projects Delivered" data={productData}/>
      <AdsArt />
      <Products heading="More Projects" data={productData2}/>
      <Footer />
    </Router>

  );
}

export default App;
