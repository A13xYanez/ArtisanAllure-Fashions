import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img from './assets/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg';

export default function Products(props) {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8080/${props.urlPath}/${page}`)
        .then((res) => { setProducts(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, [page]);
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
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                    <span className='dropdown-text'>Sort by</span>
                    <div className="dropdown-icon-container">
                        <IoIosArrowDown className='dropdown-icon' />
                    </div>
                </div>
            </div>
            <div className="products-display-container">
                {products.map((product) => (
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
                                <h2 className="product-brand">{product.brand}</h2>
                                <div className="review-stars">
                                    <p>5.0</p>
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
            <div className="pages">
                <FaArrowLeft className='page-arrow' onClick={() => page != 1 ? setPage(page - 1) : setPage(page)} />
                <h2>{page}</h2>
                <FaArrowRight className='page-arrow' onClick={() => setPage(page + 1)} />
            </div>
        </div>
    )
};