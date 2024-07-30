import React from "react";
import Navbar from '../reusable-components/Navbar';
import Hero from './Hero';
import LogoScroller from './LogoScroller';
import FeaturedProductscroller from './FeaturedProductscroller';
import Promo from './Promo';
import TopRatedProductscroller from './TopRatedProductscroller';
import OnSaleProductscroller from './OnSaleProductscroller';
import Benefits from "./Benefits";
import Footer from '../reusable-components/Footer';
import ToastContainer from '../reusable-components/ToastContainer';
import ToastProvider from '../reusable-components/ToastContext';
import './Home.css';

export default function HomePage() {
    return (
        <>
            <ToastProvider>
                <Navbar /> 
                <Hero />
                <LogoScroller />
                <FeaturedProductscroller />
                <Promo />
                <TopRatedProductscroller />
                <OnSaleProductscroller />
                <Benefits />
                <Footer />
                <ToastContainer />
            </ToastProvider>
        </>
    )
};