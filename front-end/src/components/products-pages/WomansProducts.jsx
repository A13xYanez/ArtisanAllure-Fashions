import React from 'react';
import './Products.css'
import Navbar from '../reusable-components/Navbar';
import Products from './Products';
import Footer from '../reusable-components/Footer';

export default function WomansProducts() {
    return (
        <>
            <Navbar /> 
            <Products urlPath={'products/womans'} />
            <Footer />
        </>
    )
};