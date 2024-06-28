import React from 'react'
import img from './assets/hero2.png'
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section className='hero2'>
            <div hero-img-container2>
                <img src={img} className="hero-img2" />
            </div>
            <div className="hero-text2">
                <div className="hero-text-box">
                    <motion.h6
                        initial={{
                            x: -500,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .35,
                    }}>FIND YOUR STYLE</motion.h6>
                    <motion.h1
                        initial={{
                            x: -500,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .50, 
                    }}>New Arrivals</motion.h1>
                    <motion.h2
                        initial={{
                            x: -500,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .65,
                    }}>Ready To Rock</motion.h2>
                    <motion.p
                        initial={{
                            x: -500,
                        }}
                        animate={{
                            x: 0,
                        }}
                        transition={{
                            duration: .80,
                    }}>Discover Our New & Featured Collections With Frequent Updates</motion.p>
                    <motion.button className="hero-button2"
                    initial={{
                        x: -500,
                    }}
                    animate={{
                        x: 0,
                    }}
                    transition={{
                        duration: .95,
                        ease: 'circIn'
                    }}>Shop Now {<FaArrowRight />}</motion.button>
                </div>
            </div>
        </section>
    )
}