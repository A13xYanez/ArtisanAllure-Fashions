import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

axios.defaults.withCredentials = true;

export default function ProductsInCart() {
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get('https://artisanallurefashions-backend.onrender.com/account/displayProductsInCart')
        .then((res) => { setProducts(res.data), setIsLoggedIn(true) })
        .catch((error) => { console.error(error.response.data.error); });
    }, []);

    function incrementProduct(e) {
        axios.post(`https://artisanallurefashions-backend.onrender.com/account/addToCart/${(e.target.value)}`)
        .then((res) => {
            axios.get('https://artisanallurefashions-backend.onrender.com/account/displayProductsInCart')
            .then((res) => { setProducts(res.data); })
            .catch((error) => { console.error(error.response.data.error); });
        })
        .catch((error) => { console.error(error.response.data.error); });
    };

    function decrementProduct(e) {
        axios.put(`https://artisanallurefashions-backend.onrender.com/account/subtractFromCart/${e.target.value}`)
        .then((res) => {
            axios.get('https://artisanallurefashions-backend.onrender.com/account/displayProductsInCart')
            .then((res) => { setProducts(res.data); })
            .catch((error) => { console.error(error.response.data.error); });
        })
        .catch((error) => { console.error(error.response.data.error); });
    };

    return (
        <section className='products-in-cart'>
            <div className='section-title'>
                <h3>Shopping Cart</h3>
            </div>
            {products.map((product) => (
                <div className="product-cart-card" key={product.id}>
                    <div className="product-img-desc">
                        <div className="product-cart-img">
                            <img src={`product-images/${product.product_image}.jpg`} className="product-img" />
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
                    </div>
                    <div className='product-qty-price'>
                        <div className="product-cart-quantity">
                            <button className="quantity-btn subtract-quantity" value={product.id} onClick={decrementProduct}>{<FaMinus className='btn-icon-minus' />}</button>
                            <p className="product-amount">{product.quantity}</p>
                            <button className="quantity-btn add-quantity" value={product.id} onClick={incrementProduct}>{<FaPlus className='btn-icon-add' />}</button>
                        </div>
                        <div className="product-cart-costs">
                            <p className="total">Total</p>
                            {product.sale_price == 0 && <p className="costs">${(product.regular_price * product.quantity).toFixed(2)}</p>}
                            {product.sale_price > 0 && <p className='sale-costs'>${(product.sale_price * product.quantity).toFixed(2)}</p>}
                        </div>
                    </div>
                </div>
            ))}
            {!isLoggedIn ? (
                <div className='cart-temp-msg'>
                    <h1>Not logged in</h1>
                    <p>Please login to access your cart</p>
                </div>
            ) : products.length == 0 && (
                <div className='cart-temp-msg'>
                    <h1>Your cart is empty</h1>
                    <p>Add products to your cart to view them</p>
                </div>
            )}
        </section>
    )
}