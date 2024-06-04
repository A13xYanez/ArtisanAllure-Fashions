import React from 'react'
import './App.css'
import Navbar from './components/home-page/Navbar'
import Hero2 from './components/home-page/Hero2'
import LogoScroller from './components/home-page/LogoScroller'
import Productscroller from './components/home-page/Productscroller'
import Banner1 from './components/home-page/Banner1'
import Footer2 from './components/home-page/Footer2'

export default function App() {
  return (
    <div className='app'>
      <Navbar /> 
      <Hero2 />
      <LogoScroller />
      <Productscroller />
      <Banner1 />
      <Productscroller />
      <Productscroller />
      <Footer2 />
    </div>
  )
}
