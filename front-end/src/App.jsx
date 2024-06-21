import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Authenticate from './components/authentication/Authenticate';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import NewAndFeatured from './components/products-pages/NewAndFeatured';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/login' element={<Authenticate />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/featured' element={<NewAndFeatured />} />
        </Routes>
    </Router>
  )
};
