import React from 'react'
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import converse from '../assets/clothes/CONVERSE-Chuck-Taylor-All-Star-Black-High-Top-Shoes.jpg'
import nike from '../assets/clothes/NIKE-Sportswear-Womens-Oversized-Crewneck-Sweatshirt.jpg'
import rvca from '../assets/clothes/RVCA-Slide-Womens-Crop-Tank-Top.jpg'
import sc from '../assets/clothes/SANTA-CRUZ-Pace-Ritual-Hand-Mens-Tee.jpg'

export default function Featured() {
    return (
        <section className='product--section'>
            <div className='section-title'>
                <h2>Featured Products</h2>
                <button>Explore More</button>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className='product'>
                        <img src={converse} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>Converse</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>CONVERSE Chuck Taylor All Star Black High Top Shoes</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='product'>
                        <img src={sc} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>Santa Cruz</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>SANTA CRUZ Pace Ritual Hand Mens Tee</h5>
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
                            <h5>NIKE Sportswear Womens Oversized Crewneck Sweatshirt</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='product'>
                        <img src={rvca} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>RVCA</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>RVCA Slide Womens Crop Tank Top</h5>
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