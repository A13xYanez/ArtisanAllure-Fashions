import React from'react'
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import adidas from '../assets/clothes/ADIDAS-Mirage-Mens-Tee.jpg'
import hokusai from '../assets/clothes/HOKUSAI-Pastel-Great-Wave-Unisex-Tee.jpg'
import fp from '../assets/clothes/FREE-PEOPLE-Coffee-Date-Mini-Leather-Crossbody-Bag.jpg'
import ft from '../assets/clothes/FULL-TILT-Puppy-Bow-Womens-Baby-Tee.jpg'

export default function NewArrivals() {
    return (
        <section className='product--section new-arrivals'>
            <div className='section-title'>
                <h2>New Arrivals</h2>
                <button>Explore More</button>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className='product'>
                        <img src={adidas} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>Adidas</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>ADIDAS Mirage Mens Tee</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='product'>
                        <img src={hokusai} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>Hokusai</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>HOKUSAI Pastel Great Wave Unisex Tee</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='product'>
                        <img src={fp} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>Free People</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>FREE PEOPLE Coffee Date Mini Leather Crossbody Bag</h5>
                            <h4>$00</h4>
                        </div>
                        <div className='cart-box'>
                            <BsFillCartPlusFill className='plus-cart' />
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='product'>
                        <img src={ft} className='product-img' />
                        <div className='product-discretion'>
                            <div className='card-title'>
                                <span>Full Tilt</span>
                                <div className='review-stars'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <h5>FULL TILT Puppy Bow Womens Baby Tee</h5>
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