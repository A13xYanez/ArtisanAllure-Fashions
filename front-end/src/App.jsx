import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import Authenticate from './components/authentication/Authenticate';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import Wishlist from './components/wishlist-page/Wishlist';
import NewAndFeatured from './components/products-pages/NewAndFeatured';
import MensProducts from './components/products-pages/MenProducts';
import WomansProducts from './components/products-pages/WomansProducts';
import KidsProducts from './components/products-pages/KidsProducts';
import SalesProducts from './components/products-pages/SalesProducts';
import ShowcaseProductComplete from './components/product-showcase/ShowcaseProductComplete';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/login' element={<Authenticate />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/featured' element={<NewAndFeatured />} />
          <Route path='/mens' element={<MensProducts />} />
          <Route path='/womans' element={<WomansProducts />} />
          <Route path='/kids' element={<KidsProducts />} />
          <Route path='/sales' element={<SalesProducts />} />
          <Route path='/product-details/:id' element={<ShowcaseProductComplete />} />
        </Routes>
    </Router>
  )
};
