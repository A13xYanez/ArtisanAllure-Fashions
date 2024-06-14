import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <header className='header'>
            <div className='header--text'>
                <motion.h6
                    initial={{
                        x: -500,
                    }}
                    animate={{
                        x: 100,
                    }}
                    transition={{
                        duration: .35,
                    }}>FIND YOUR STYLE</motion.h6>
                <motion.h1
                    initial={{
                        x: -500,
                    }}
                    animate={{
                        x: 100,
                    }}
                    transition={{
                        duration: .50, 
                    }}>New Arrivals</motion.h1>
                <motion.h2
                    initial={{
                        x: -500,
                    }}
                    animate={{
                        x: 100,
                    }}
                    transition={{
                        duration: .65,
                    }}>Ready To Rock</motion.h2>
                <motion.p
                    initial={{
                        x: -500,
                    }}
                    animate={{
                        x: 100,
                    }}
                    transition={{
                        duration: .80,
                    }}>Discover Our New & Featured Collections</motion.p>
            </div>
            <motion.button className='header--button'
                initial={{
                        x: -500,
                    }}
                    animate={{
                        x: 100,
                    }}
                    transition={{
                        duration: .95,
                        ease: 'circIn'
                    }}>Shop Now {<FaArrowRight className='btn-arrow' />}</motion.button>
        </header>
    )
}