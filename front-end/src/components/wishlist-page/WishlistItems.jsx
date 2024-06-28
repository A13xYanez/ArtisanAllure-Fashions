import React from 'react';
import './Wishlist.css';
import { FaHeart } from "react-icons/fa";
import img from './assets/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg';

export default function WishlistItems() {
    return (
        <div className='wishlist-items-container'>
            <div className='wishlist-title'>
                <h3>Wishlist</h3>
            </div>
            <div className="product-wishlist-card">
                <div className="product-wishlist-img">
                    <img src={img} className="wishlist-product-img" />
                </div>
                <div className="product-wishlist-description">
                    <div className="wishlist-product-info">
                        <h2>Brand</h2>
                        <p>Description</p>
                    </div>
                    <div className="product-wishlist-costs">
                        <p className="wishlist-price-title">Price:</p>
                        <p className="wishlist-product-price">$0.00</p>
                    </div>
                </div>
                <div className="wishlist-heart-container">
                    <p>Remove from wishlist</p>
                    <FaHeart className='wishlist-heart-icon' />
                </div>
            </div>
        </div>
    )
};