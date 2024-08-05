import React from 'react'
import img from './assets/hero2.png'
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className='hero2'>
            <div className='hero-img-container2'>
                <img src={img} className="hero-img2" />
            </div>
            <div className="hero-text2">
                <div className="hero-text-box">
                    <motion.h6
                        initial={{
                            x: -800,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .35,
                    }}>FIND YOUR STYLE</motion.h6>
                    <motion.h1
                        initial={{
                            x: -800,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .50, 
                    }}>New Arrivals</motion.h1>
                    <motion.h2
                        initial={{
                            x: -800,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .65,
                    }}>Ready To Rock</motion.h2>
                    <motion.p
                        initial={{
                            x: -800,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .80,
                    }}>Discover What's New In Our New & Featured Collections</motion.p>
                    <Link to='/featured' className='hero-link'>
                        <motion.button className="hero-button2"
                        initial={{
                            x: -800,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .95,
                            ease: 'circIn'
                        }}>Shop Now {<FaArrowRight />}</motion.button>
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}