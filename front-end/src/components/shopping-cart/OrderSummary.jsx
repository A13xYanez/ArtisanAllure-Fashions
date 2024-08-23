import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoLockClosedSharp } from "react-icons/io5";

axios.defaults.withCredentials = true;

export default function OrderSummary() {
    const [estimatedTotal, setEstimatedTotal] = useState(0);

    useEffect(() => {
        axios.get('https://artisanallurefashions-backend.onrender.com/account/cartTotal')
        .then((res) => { setEstimatedTotal(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, []);

    return (
        <section className='order-summary'>
            <div className='section-title'>
                <h3>Order Summary</h3>
            </div>
            <div className='contain-order-summary'>
                <div className="costs-total">
                    <div className="category-section">
                        <p className='category-title'>Subtotal</p>
                        <p className='category-costs'>${(estimatedTotal).toFixed(2)}</p>
                    </div>
                    <div className="category-section">
                        <p className='category-title'>Shipping</p>
                        <p className='category-costs'>FREE</p>
                    </div>
                    <div className="category-section">
                        <p className='category-title'>Estimated Tax</p>
                        <p className='category-costs'>${(estimatedTotal * 0.0725).toFixed(2)}</p>
                    </div>
                    <div className="category-section">
                        <p className='category-title'>Estimated Total</p>
                        <p className='category-costs'>${(estimatedTotal + (estimatedTotal * 0.0725)).toFixed(2)}</p>
                    </div>
                </div>
                <div className="promo-code">
                    <h4>Have A Promo Code?</h4>
                    <div className="promo-box">
                        <input type="text" className="promo-input" placeholder='Enter Promo Code' />
                        <button className="promo-btn">Apply</button>
                    </div>
                </div>
                <div className="checkout">
                    <h4>Checkout</h4>
                    <button className="checkout-btn">{<IoLockClosedSharp className='lock-icon'/>}Proceed To Checkout</button>
                </div>
            </div>
        </section>
    )
}