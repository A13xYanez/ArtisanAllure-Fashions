import React from 'react';
import './Products.css'
import Navbar from '../reusable-components/Navbar';
import Products from './Products';
import Footer from '../reusable-components/Footer';

export default function SalesProducts({ setStopScroll }) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return (
        <>    
            <Navbar setStopScroll={setStopScroll} /> 
            <Products urlPath={'products/sale'} />
            <Footer />
        </>
    )
};