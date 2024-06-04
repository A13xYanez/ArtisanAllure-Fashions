import React from 'react'
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import fortyseven from '../assets/clothes/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg'
import rsq from '../assets/clothes/RSQ-Womens-Low-Rise-Baggy-Jeans.jpg'
import timberland from '../assets/clothes/TIMBERLAND-6-Mens-Boots.jpg'
import nike from '../assets/clothes/NIKE-Everyday-Dri-Fit-Lightweight-3-Pack-Crew-Socks.jpg'

export default function BestSellers() {
    return (
        <section className='product--section best-sellers'>
            <div className='section-title'>
                <h2>Best Sellers</h2>
                <button>Explore More</button>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className='product'>
                        <img src={fortyseven} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>47</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>47 BRAND Los Angeles Dodgers '47 Clean Up Strapback Hat</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='product'>
                        <img src={rsq} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>RSQ</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>RSQ Womens Low Rise Baggy Jeans</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='product'>
                        <img src={timberland} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>Timberland</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>TIMBERLAND 6" Mens Boots</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='product'>
                        <img src={nike} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>Nike</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>NIKE Everyday Dri-Fit Lightweight 3 Pack Crew Socks</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}