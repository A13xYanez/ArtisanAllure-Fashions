import React from 'react';
import Navbar from '../reusable-components/Navbar';
import WishlistItems from './WishlistItems';
import Footer from '../reusable-components/Footer';

export default function Wishlist({ setStopScroll }) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return (
        <>
            <Navbar setStopScroll={setStopScroll} />
            <WishlistItems />
            <Footer />
        </>
    )
};