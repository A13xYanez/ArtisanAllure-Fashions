import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import img from './assets/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

axios.defaults.withCredentials = true;

export default function ProductsInCart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/account/displayProductsInCart')
        .then((res) => { setProducts(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, []);

    return (
        <section className='products-in-cart'>
            <div className='section-title'>
                <h3>Shopping Cart</h3>
            </div>
            {products.map((product) => (
                <div className="product-cart-card">
                    <div className="product-cart-img">
                        <img src={img} className="product-img" />
                    </div>
                    <div className="product-cart-description">
                        <div className="info">
                            <h2>{product.brand}</h2>
                            <p>{product.product_name}</p>
                        </div>
                        <div className="cart-card-btn">
                            <button>Edit</button>
                            <button>Remove</button>
                            <button>Save For Later</button>
                        </div>
                    </div>
                    <div className="product-cart-quantity">
                        <button className="quantity-btn">{<FaMinus className='btn-icon-minus' />}</button>
                        <p className="product-amount">{product.quantity}</p>
                        <button className="quantity-btn">{<FaPlus className='btn-icon-add' />}</button>
                    </div>
                    <div className="product-cart-costs">
                        <p className="total">Total</p>
                        <p className="costs">${product.regular_price * product.quantity}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}