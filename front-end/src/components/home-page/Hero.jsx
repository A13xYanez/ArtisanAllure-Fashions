import React from 'react'
import img from './assets/hero2.png'
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section className='hero2'>
            <div hero-img-container2>
                <img src={img} className="hero-img2" />
            </div>
            <div className="hero-text2">
                <h6>FIND YOUR STYLE</h6>
                <h1>New Arrivals</h1>
                <h2>Ready To Rock</h2>
                <p>Discover Our New & Featured Collections</p>
                <button className="hero-button2">
                    Shop Now {<FaArrowRight />}
                </button>
            </div>
        </section>
    )
}