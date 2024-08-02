import React from 'react';
import Navbar from '../reusable-components/Navbar';
import WishlistItems from './WishlistItems';
import Footer from '../reusable-components/Footer';

export default function Wishlist({ setStopScroll }) {
    return (
        <>
            <Navbar setStopScroll={setStopScroll} />
            <WishlistItems />
            <Footer />
        </>
    )
};