import React from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import LogoScroller from './LogoScroller';
import FeaturedProductscroller from './FeaturedProductscroller';
import Promo from './Promo';
import TopRatedProductscroller from './TopRatedProductscroller';
import OnSaleProductscroller from './OnSaleProductscroller';
import Benefits from "./Benefits";
import Footer2 from './Footer2';
import './Home.css';

export default function HomePage() {
    return (
        <>
            <Navbar /> 
            <Hero />
            <LogoScroller />
            <FeaturedProductscroller />
            <Promo />
            <TopRatedProductscroller />
            <OnSaleProductscroller />
            <Benefits />
            <Footer2 />
        </>
    )
};