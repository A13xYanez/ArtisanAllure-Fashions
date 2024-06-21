import React from "react";
import Navbar from './home-page/Navbar';
import Hero from './home-page/Hero';
import LogoScroller from './home-page/LogoScroller';
import FeaturedProductscroller from './home-page/FeaturedProductscroller';
import TopRatedProductscroller from './home-page/TopRatedProductscroller';
import OnSaleProductscroller from './home-page/OnSaleProductscroller';
import Banner1 from './home-page/Banner1';
import Footer2 from './home-page/Footer2';
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