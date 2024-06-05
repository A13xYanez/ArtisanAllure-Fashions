import React from "react"
import Navbar from './home-page/Navbar'
import Hero2 from './home-page/Hero2'
import LogoScroller from './home-page/LogoScroller'
import Productscroller from './home-page/Productscroller'
import Banner1 from './home-page/Banner1'
import Footer2 from './home-page/Footer2'
import './Home.css'

export default function HomePage() {
    return (
        <>
            <Navbar /> 
            <Hero2 />
            <LogoScroller />
            <Productscroller />
            <Banner1 />
            <Productscroller />
            <Productscroller />
            <Footer2 />
        </>
    )
}