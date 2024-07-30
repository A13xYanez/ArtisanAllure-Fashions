import React from 'react';
import { useState } from 'react';
import Navbar from '../reusable-components/Navbar';
import ProductRatings from './ProductRatings';
import ProductReviews from './ProductReviews'
import ProductDescription from './ProductDescription';
import Footer from '..//reusable-components/Footer';
import './ShowcaseProduct.css';

export default function ShowcaseProduct() {
    const [isActive, setIsActive] = useState(false);
    const [refreshPage, setRefreshPage] = useState(false);

    return (
        <div className={isActive ? 'no-scroll-showcase-product' : 'scroll-showcase-product'}>
            <Navbar />
            <ProductDescription />
            <ProductRatings isActive={isActive} setIsActive={setIsActive} 
                            refreshPage={refreshPage} setRefreshPage={setRefreshPage} 
            />
            <ProductReviews refreshPage={refreshPage} setRefreshPage={setRefreshPage}  />
            <Footer />
        </div>
    )
};