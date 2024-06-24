import React from 'react';
import './Products.css'
import Navbar from './Navbar';
import Products from './Products';

export default function WomansProducts() {
    return (
        <>
            <Navbar /> 
            <Products urlPath={'products/womans'} />
        </>
    )
};