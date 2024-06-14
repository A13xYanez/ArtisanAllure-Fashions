import React from 'react'
import img from './assets/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

export default function ProductsInCart() {
    return (
        <section className='products-in-cart'>
            <div className='section-title'>
                <h3>Shopping Cart</h3>
            </div>
            <div className="product-cart-card">
                <div className="product-cart-img">
                    <img src={img} className="product-img" />
                </div>
                <div className="product-cart-description">
                    <div className="info">
                        <h2>Brand</h2>
                        <p>Description</p>
                    </div>
                    <div className="cart-card-btn">
                        <button>Edit</button>
                        <button>Remove</button>
                        <button>Save For Later</button>
                    </div>
                </div>
                <div className="product-cart-quantity">
                    <button className="quantity-btn">{<FaMinus className='btn-icon-minus' />}</button>
                    <p className="product-amount">10</p>
                    <button className="quantity-btn">{<FaPlus className='btn-icon-add' />}</button>
                </div>
                <div className="product-cart-costs">
                    <p className="total">Total</p>
                    <p className="costs">$0.00</p>
                </div>
            </div>
        </section>
    )
}