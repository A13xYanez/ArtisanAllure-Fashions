import React from 'react';
import './Products.css'
import Navbar from '../reusable-components/Navbar';
import Products from './Products';
import Footer from '../reusable-components/Footer';
import ToastContainer from '../reusable-components/ToastContainer';
import ToastProvider from '../reusable-components/ToastContext';

export default function NewAndFeatured() {
    return (
        <>
            <ToastProvider>
                <Navbar /> 
                <Products urlPath={'products/featured'} />
                <Footer />
                <ToastContainer />
            </ToastProvider>
        </>
    )
};