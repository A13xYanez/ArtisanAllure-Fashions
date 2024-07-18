import React from 'react';
import Navbar from '../reusable-components/Navbar';
import ProductRatings from './ProductRatings';
import ProductReviews from './ProductReviews'
import ProductDescription from './ProductDescription';
import Footer from '..//reusable-components/Footer';
import './ShowcaseProduct.css';

export default function ShowcaseProduct() {
    return (
        <div className='showcase-product'>
            <Navbar />
            <ProductDescription />
            <ProductRatings />
            <ProductReviews />
            <Footer />
        </div>
    )
}