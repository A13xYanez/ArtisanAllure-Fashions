import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Productscroller() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/home/featured')
        .then((res) => { setProducts(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, []);

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
                {products.map((product) => (
                    <div className="product-card">
                        <div className="product-image">
                            <div className="heart-container">
                                <FaRegHeart className="heart-icon" />
                            </div>
                            <span className="discount-tag">50% off</span>
                            <img src={product.product_image} className="product-thumb" alt="" />
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
                            <p className="product-short-description">{product.product_name}</p>
                            <span className="actual-price">${product.regular_price}</span><span className="price">${product.sale_price}</span>
                            <div className="cart-container">
                                <BsFillCartPlusFill className="cart-icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};