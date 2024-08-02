import React from 'react';
import { useState } from 'react';
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

export default function BundleAllPages() {
    const [stopScroll, setStopScroll] = useState(false);

    return (
        <div className={stopScroll ? 'app-prevent-scroll' : 'app'}>
            <Router>
                <Routes>
                <Route path='/' element={<HomePage setStopScroll={setStopScroll} />} exact />
                <Route path='/login' element={<Authenticate />} />
                <Route path='/cart' element={<ShoppingCart setStopScroll={setStopScroll} />} />
                <Route path='/wishlist' element={<Wishlist setStopScroll={setStopScroll} />} />
                <Route path='/featured' element={<NewAndFeatured setStopScroll={setStopScroll} />} />
                <Route path='/mens' element={<MensProducts setStopScroll={setStopScroll} />} />
                <Route path='/womans' element={<WomansProducts setStopScroll={setStopScroll} />} />
                <Route path='/kids' element={<KidsProducts setStopScroll={setStopScroll} />} />
                <Route path='/sales' element={<SalesProducts setStopScroll={setStopScroll} />} />
                <Route path='/product-details/:id' element={<ShowcaseProductComplete setStopScroll={setStopScroll} />} />
                </Routes>
            </Router>
        </div>
    )
};
