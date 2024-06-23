import React from 'react';
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import img from './assets/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg';

export default function Products() {
    return (
        <div className='product-page'>
            <div className='product-filters'>
                <div className='filter-buttons'>
                    <button><VscSettings className='icon' />All Filters</button>
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Filter</button>
                </div>
                <div className='dropdown-container'>
                    <select className='filter-dropdown'>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                    </select>
                    <div className="dropdown-icon-container">
                        <IoIosArrowDown className='dropdown-icon' />
                    </div>
                </div>
            </div>
            <div className="products-display-container">
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
                                <p>5.0</p>
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">47 BRAND Los Angeles Dodgers 47 Clean Up Strapback Hat</p>
                        <span className="actual-price">$0.00</span><span className="price">$0.00</span>
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
                                <p>5.0</p>
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">47 BRAND Los Angeles Dodgers 47 Clean Up Strapback Hat</p>
                        <span className="actual-price">$0.00</span><span className="price">$0.00</span>
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
                                <p>5.0</p>
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">47 BRAND Los Angeles Dodgers 47 Clean Up Strapback Hat</p>
                        <span className="actual-price">$0.00</span><span className="price">$0.00</span>
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
                                <p>5.0</p>
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </div>
                        </div>
                        <p className="product-short-description">47 BRAND Los Angeles Dodgers 47 Clean Up Strapback Hat</p>
                        <span className="actual-price">$0.00</span><span className="price">$0.00</span>
                        <div className="cart-container">
                            <BsFillCartPlusFill className="cart-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};