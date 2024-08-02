import React from "react";
import './ShoppingCart.css';
import Navbar from '../reusable-components/Navbar';
import CartComplete from './CartComplete';
import Footer from '../reusable-components/Footer';

export default function ShoppingCart({ setStopScroll }) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return (
        <>
            <Navbar setStopScroll={setStopScroll} />
            <CartComplete />
            <Footer />
        </>
    )
};