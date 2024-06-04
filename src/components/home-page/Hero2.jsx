import React from 'react'
import img from './assets/hero2.png'

export default function Hero2() {
    return (
        <section className='hero'>
            <img src={img} className="hero-img" />
            <div className="hero-text">
                <h6>FIND YOUR STYLE</h6>
                <h1>New Arrivals</h1>
                <h2>Ready To Rock</h2>
                <p>Discover Our New & Featured Collections</p>
                <button className="hero-button">
                    Shop Now
                </button>
            </div>
        </section>
    )
}