import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function TopRatedProductscroller() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/home/ratings')
        .then((res) => { setProducts(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, []);

    return (
        <section className="product-home">
            <div className="section-header-home">
                <h2 className="product-category-home">Top Rated</h2>
                <button>Explore More</button>
            </div>
            <button class="pre-btn-home">{<IoIosArrowForward className="arrow-icon-home" />}</button>
            <button class="nxt-btn-home">{<IoIosArrowForward className="arrow-icon-home" />}</button>
            <button className="pre-btn-home"></button>
            <button className="nxt-btn-home"></button>
            <div className="product-container-home">
                {products.map((product) => (
                    <div className="product-card-home">
                        <div className="product-image-home">
                            <div className="heart-container-home">
                                <FaRegHeart className="heart-icon-home" />
                            </div>
                            <span className="discount-tag-home">50% off</span>
                            <img src={product.product_image} className="product-thumb-home" alt="" />
                            <button class="card-btn-home">add to wishlist</button>
                        </div>
                        <div className="product-info-home">
                            <div className="info-title-home">
                                <h2 className="product-brand-home">{product.brand}</h2>
                                <div className="review-stars-home">
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <p className="product-short-description-home">{product.product_name}</p>
                            <span className="actual-price-home">${product.regular_price}</span><span className="price-home">${product.sale_price}</span>
                            <div className="cart-container-home">
                                <BsFillCartPlusFill className="cart-icon-home" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};