import React from "react";
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import img from './assets/clothes/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg'

export default function Productscroller() {
    return (
        <section className="product">
            <div className="section-header">
                <h2 className="product-category">best selling</h2>
                <button>Explore More</button>
            </div>
            <button class="pre-btn">{<IoIosArrowForward className="arrow-icon" />}</button>
            <button class="nxt-btn">{<IoIosArrowForward className="arrow-icon" />}</button>
            <button className="pre-btn"></button>
            <button className="nxt-btn"></button>
            <div className="product-container">
                <div className="product-card">
                    <div className="product-image">
                        <div className="heart-container">
                            <FaRegHeart className="heart-icon" />
                        </div>
                        <span className="discount-tag">50% off</span>
                        <img src={img} className="product-thumb" alt="" />
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <div className="info-title">
                            <h2 className="product-brand">brand</h2>
                            <div className="review-stars">
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">Los Angeles Dodgers '47 Strapback</p>
                        <span className="actual-price">$40</span><span className="price">$200</span>
                        <div className="cart-container">
                            <BsFillCartPlusFill className="cart-icon" />
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <div className="heart-container">
                            <FaRegHeart className="heart-icon" />
                        </div>
                        <span className="discount-tag">50% off</span>
                        <img src={img} className="product-thumb" alt="" />
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <div className="info-title">
                            <h2 className="product-brand">brand</h2>
                            <div className="review-stars">
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">Los Angeles Dodgers '47 Strapback Hat</p>
                        <span className="actual-price">$40</span><span className="price">$20</span>
                        <div className="cart-container">
                            <BsFillCartPlusFill className="cart-icon" />
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <div className="heart-container">
                            <FaRegHeart className="heart-icon" />
                        </div>
                        <span className="discount-tag">50% off</span>
                        <img src={img} className="product-thumb" alt="" />
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <div className="info-title">
                            <h2 className="product-brand">brand</h2>
                            <div className="review-stars">
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">Los Angeles Dodgers '47 Strapback Hat</p>
                        <span className="actual-price">$40</span><span className="price">$20</span>
                        <div className="cart-container">
                            <BsFillCartPlusFill className="cart-icon" />
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <div className="heart-container">
                            <FaRegHeart className="heart-icon" />
                        </div>
                        <span className="discount-tag">50% off</span>
                        <img src={img} className="product-thumb" alt="" />
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <div className="info-title">
                            <h2 className="product-brand">brand</h2>
                            <div className="review-stars">
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">Los Angeles Dodgers '47 Strapback Hat</p>
                        <span className="actual-price">$40</span><span className="price">$20</span>
                        <div className="cart-container">
                            <BsFillCartPlusFill className="cart-icon" />
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <div className="heart-container">
                            <FaRegHeart className="heart-icon" />
                        </div>
                        <span className="discount-tag">50% off</span>
                        <img src={img} className="product-thumb" alt="" />
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <div className="info-title">
                            <h2 className="product-brand">brand</h2>
                            <div className="review-stars">
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">Los Angeles Dodgers '47 Strapback Hat</p>
                        <span className="actual-price">$40</span><span className="price">$20</span>
                        <div className="cart-container">
                            <BsFillCartPlusFill className="cart-icon" />
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <div className="heart-container">
                            <FaRegHeart className="heart-icon" />
                        </div>
                        <span className="discount-tag">50% off</span>
                        <img src={img} className="product-thumb" alt="" />
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <div className="info-title">
                            <h2 className="product-brand">brand</h2>
                            <div className="review-stars">
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">Los Angeles Dodgers '47 Strapback Hat</p>
                        <span className="actual-price">$40</span><span className="price">$20</span>
                        <div className="cart-container">
                            <BsFillCartPlusFill className="cart-icon" />
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <div className="heart-container">
                            <FaRegHeart className="heart-icon" />
                        </div>
                        <span className="discount-tag">50% off</span>
                        <img src={img} className="product-thumb" alt="" />
                        <button class="card-btn">add to wishlist</button>
                    </div>
                    <div className="product-info">
                        <div className="info-title">
                            <h2 className="product-brand">brand</h2>
                            <div className="review-stars">
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">Los Angeles Dodgers '47 Strapback Hat</p>
                        <span className="actual-price">$40</span><span className="price">$20</span>
                        <div className="cart-container">
                            <BsFillCartPlusFill className="cart-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}