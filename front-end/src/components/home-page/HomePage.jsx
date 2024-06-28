import React from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import LogoScroller from './LogoScroller';
import FeaturedProductscroller from './FeaturedProductscroller';
import TopRatedProductscroller from './TopRatedProductscroller';
import OnSaleProductscroller from './OnSaleProductscroller';
import Banner1 from './Banner1';
import Footer2 from './Footer2';
import './Home.css';

export default function HomePage() {
    return (
        <>
            <Navbar /> 
            <Hero />
            <LogoScroller />
            <FeaturedProductscroller />
            <Banner1 />
            <TopRatedProductscroller />
            <OnSaleProductscroller />
            <Footer2 />
        </>
    )
};