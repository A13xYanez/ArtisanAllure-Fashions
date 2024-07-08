import React from 'react';
import Navbar from './Navbar';
import ProductRatings from './ProductRatings';
import ProductReviews from './ProductReviews'
import ProductDescription from './ProductDescription';

import './ShowcaseProduct.css';

export default function ShowcaseProduct() {
    return (
        <>
            <Navbar />
            <ProductDescription />
            <ProductRatings />
            <ProductReviews />
        </>
    )
}