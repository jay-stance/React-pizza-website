import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import { GLobalStyle } from "./globalStyles"
import {productData, productDataTwo} from "./components/products/data"
import Hero from "./components/Hero"
import Products from "./components/products"
import Features from "./components/features"
import Footer from "./components/footer"

function App() {
  return (
    <BrowserRouter>
      < GLobalStyle />
      < Hero />
      < Products heading="Choose your favourite" data={productData} />
      < Features />
      < Products heading=" Sweet Treat For you " data={productDataTwo} />
      < Footer />
    </BrowserRouter>
  );
}

export default App;