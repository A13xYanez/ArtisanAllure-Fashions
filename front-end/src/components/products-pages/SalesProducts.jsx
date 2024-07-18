import React from 'react';
import './Products.css'
import Navbar from '../reusable-components/Navbar';
import Products from './Products';
import Footer from '../reusable-components/Footer';

export default function SalesProducts() {
    return (
        <>
            <Navbar /> 
            <Products urlPath={'products/sale'} />
            <Footer />
        </>
    )
};