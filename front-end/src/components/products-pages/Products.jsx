import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useToast } from '../reusable-components/UseToast';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

export default function Products(props) {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [enableFilters, setEnableFilters] = useState(false);
    const toast = useToast();
    const [inCart, setInCart] = useState([]);
    const [inWishlist, setInWishList] = useState([]);
    const [rerenderProducts, setRerenderProducts] = useState(false);

    useEffect(() => {
        if (!rerenderProducts) {
            axios.get(`https://artisanallurefashions-backend.onrender.com/${props.urlPath}/${page}`)
            .then((res) => { setProducts(res.data); document.body.scrollTop = document.documentElement.scrollTop = 0; })
            .catch((error) => { console.error(error.response.data.error); });
        }

        const getUserData = async() => {
            await axios.get('https://artisanallurefashions-backend.onrender.com/account/displayProductsInCart')
            .then((res) => { setInCart(res.data) })
            .catch((error) => { console.error(error.response.data.error); });
    
            await axios.get(`https://artisanallurefashions-backend.onrender.com/account/displayProductsInWishlist`)
            .then((res) => { setInWishList(res.data) })
            .catch((error) => { console.error(error.response.data.error); });
    
            setRerenderProducts(false);
        }

        getUserData();
    }, [page, rerenderProducts]);

    const addItemToCart = async(e) => {
        await axios.post(`https://artisanallurefashions-backend.onrender.com/account/addToCart/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully added to cart!"))
        .catch((error) => toast("error", "Please login to add product to cart"));
        setRerenderProducts(true);
    };

    const saveItemToWishlist = async(e) => {
        await axios.post(`https://artisanallurefashions-backend.onrender.com/account/saveToWishlist/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully saved to wishlist!"))
        .catch((error) => toast("error", "Please login to save product to wishlist"));
        setRerenderProducts(true);
    };

    function showFilterButtons() {
        setEnableFilters(!enableFilters);
    };

    function incrementPage() {
        axios.get(`https://artisanallurefashions-backend.onrender.com/${props.urlPath}/${page + 1}`)
        .then((res) => { if (res.data.length) {setPage(page + 1)} })
        .catch((error) => { console.error(error.response.data.error); });
    };

    for (let item in inCart) {
        for (let product in products) {
            if (products[product].id == inCart[item].id) {
                products[product]["already_in_cart"] = true;
            }
        }
    }

    for (let item in inWishlist) {
        for (let product in products) {
            if (products[product].id == inWishlist[item].id) {
                products[product]["already_in_wishlist"] = true;
            }
        }
    }
    
    return (
        <div className='product-page'>
            <div className='product-filters'>
                <div className='filter-buttons'>
                    <button className='main-filter-button' onClick={showFilterButtons}><VscSettings className='icon' />All Filters</button>
                    <div className={enableFilters ? 'sub-filter-buttons-enabled' : 'contain-sub-filter-buttons'}>
                        <button>Filter</button>
                        <button>Filter</button>
                        <button>Filter</button>
                        <button>Filter</button>
                        <button>Filter</button>
                        <button>Filter</button>
                    </div>
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
            <div className={products.length > 0 ? "products-display-container" : "loading-products"}>
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image">
                            <button value={product.id} className={product.already_in_wishlist ? "filled-heart-container" : "heart-container"} onClick={saveItemToWishlist}>
                                {product.already_in_wishlist ? <FaHeart className="heart-icon" /> : <FaRegHeart className="heart-icon" />}
                            </button>
                            {product.sale_price > 0 && <span className="discount-tag">{(((product.regular_price - product.sale_price) / product.regular_price) * 100).toFixed(0)}% off</span>}
                            <Link to={`/product-details/${product.id}`}><img src={`product-images/${product.product_image}.jpg`} className="product-thumb" alt="" /></Link>
                            {product.already_in_wishlist ? <button value={product.id} className="card-btn-wishlist" onClick={saveItemToWishlist}>remove from wishlist</button>
                            : <button value={product.id} className="card-btn" onClick={saveItemToWishlist}>add to wishlist</button>}
                        </div>
                        <div className="product-info">
                            <div className="info-title">
                                <h2 className="product-brand">{product.brand}</h2>
                                <div className="review-stars">
                                    <p>{product.ratings}</p>
                                    {product.ratings >= 1 ? <GoStarFill className="filled-star-icon" />
                                    : product.ratings < 1 && product.ratings > 0 ? <FaRegStarHalfStroke className="half-star-icon" />
                                    : <GoStar className="empty-star-icon" />}
                                    {product.ratings >= 2 ? <GoStarFill className="filled-star-icon" />
                                    : product.ratings < 2 && product.ratings > 1 ? <FaRegStarHalfStroke className="half-star-icon" />
                                    : <GoStar className="empty-star-icon" />}
                                    {product.ratings >= 3 ? <GoStarFill className="filled-star-icon" />
                                    : product.ratings < 3 && product.ratings > 2 ? <FaRegStarHalfStroke className="half-star-icon" />
                                    : <GoStar className="empty-star-icon" />}
                                    {product.ratings >= 4 ? <GoStarFill className="filled-star-icon" />
                                    : product.ratings < 4 && product.ratings > 3 ? <FaRegStarHalfStroke className="half-star-icon" />
                                    : <GoStar className="empty-star-icon" />}
                                    {product.ratings == 5 ? <GoStarFill className="filled-star-icon" />
                                    : product.ratings < 5 && product.ratings > 4 ? <FaRegStarHalfStroke className="half-star-icon" />
                                    : <GoStar className="empty-star-icon" />}
                                </div>
                            </div>
                            <p className="product-short-description">{product.product_name}</p>
                            <span className={product.sale_price > 0 ? "actual-price" : "regular-price"}>${product.regular_price}</span>
                            {product.sale_price > 0 && <span className="price">${product.sale_price}</span>}
                            <button value={product.id} className={product.already_in_cart ? "cart-check-container" : "cart-container"} onClick={addItemToCart}>
                                {product.already_in_cart ? <BsFillCartCheckFill className="cart-check-icon" /> : <BsFillCartPlusFill className="cart-icon" />}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pages">
                <FaArrowLeft className='page-arrow' onClick={() => page != 1 ? setPage(page - 1) : setPage(page)} />
                <h2>{page}</h2>
                <FaArrowRight className='page-arrow' onClick={incrementPage} />
            </div>
        </div>
    )
};