import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Wishlist.css';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useToast } from '../reusable-components/UseToast';

axios.defaults.withCredentials = true;

export default function WishlistItems() {
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toast = useToast();
    let wishlistCount = 0;
    const [inCart, setInCart] = useState([]);
    const [rerenderProducts, setRerenderProducts] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/account/displayProductsInWishlist`)
        .then((res) => { setProducts(res.data), setIsLoggedIn(true) })
        .catch((error) => { console.error(error.response.data.error); });

        const getUserData = async() => {
            await axios.get('http://localhost:8080/account/displayProductsInCart')
            .then((res) => { setInCart(res.data) })
            .catch((error) => { console.error(error.response.data.error); });
    
            setRerenderProducts(false);
        }

        getUserData();
    }, [rerenderProducts]);

    const addItemToCart = async(e) => {
        await axios.post(`http://localhost:8080/account/addToCart/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully added to cart!"))
        .catch((error) => toast("error", "Please login to add product to cart"));
        setRerenderProducts(true);
    };

    const saveItemToWishlist = async(e) => {
        await axios.post(`http://localhost:8080/account/saveToWishlist/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully removed from wishlist!"))
        .catch((error) => toast("error", "An unexpected error has occurred"));
        setRerenderProducts(true);
    };

    for (let productCount in products) {
        wishlistCount++;
    }

    for (let item in inCart) {
        for (let product in products) {
            if (products[product].id == inCart[item].id) {
                products[product]["already_in_cart"] = true;
            }
        }
    }


    for (let product in products) {
        products[product]["already_in_wishlist"] = true;
    }

    return (
        <div className='wishlist-items-container'>
            <div className='wishlist-title'>
                <h3>Wishlist</h3>
            </div>
            <div className={wishlistCount <= 3 ? `${products.length == 0 ? "wishlist-adjust-center" : "display-wishlist-lesser-three"}` : "products-display-container-wishlist"}>
                {products.map((product) => (
                    <div className="product-card-wishlist" key={product.id}>
                        <div className="product-image-wishlist">
                            <button value={product.id} className={product.already_in_wishlist ? "filled-heart-container-wish" : "heart-container-wishlist"} onClick={saveItemToWishlist}>
                                {product.already_in_wishlist ? <FaHeart className="heart-icon-wishlist" /> : <FaRegHeart className="heart-icon-wishlist" />}
                            </button>
                            {product.sale_price > 0 && <span className="discount-tag-wishlist">{(((product.regular_price - product.sale_price) / product.regular_price) * 100).toFixed(0)}% off</span>}
                            <Link to={`/product-details/${product.id}`}><img src={`product-images/${product.product_image}.jpg`} className="product-thumb-wishlist" alt="" /></Link>
                            {product.already_in_wishlist ? <button value={product.id} className="card-btn-wishlist-wish" onClick={saveItemToWishlist}>remove from wishlist</button>
                            : <button value={product.id} className="card-btn-wishlist" onClick={saveItemToWishlist}>add to wishlist</button>}
                        </div>
                        <div className="product-info-wishlist">
                            <div className="info-title-wishlist">
                                <h2 className="product-brand-wishlist">{product.brand}</h2>
                                <div className="review-stars-wishlist">
                                    <p>{product.ratings}</p>
                                    {product.ratings >= 1 ? <GoStarFill className="filled-star-icon-wish" />
                                    : product.ratings < 1 && product.ratings > 0 ? <FaRegStarHalfStroke className="half-star-icon-wish" />
                                    : <GoStar className="empty-star-icon-wish" />}
                                    {product.ratings >= 2 ? <GoStarFill className="filled-star-icon-wish" />
                                    : product.ratings < 2 && product.ratings > 1 ? <FaRegStarHalfStroke className="half-star-icon-wish" />
                                    : <GoStar className="empty-star-icon-wish" />}
                                    {product.ratings >= 3 ? <GoStarFill className="filled-star-icon-wish" />
                                    : product.ratings < 3 && product.ratings > 2 ? <FaRegStarHalfStroke className="half-star-icon-wish" />
                                    : <GoStar className="empty-star-icon-wish" />}
                                    {product.ratings >= 4 ? <GoStarFill className="filled-star-icon-wish" />
                                    : product.ratings < 4 && product.ratings > 3 ? <FaRegStarHalfStroke className="half-star-icon-wish" />
                                    : <GoStar className="empty-star-icon-wish" />}
                                    {product.ratings == 5 ? <GoStarFill className="filled-star-icon-wish" />
                                    : product.ratings < 5 && product.ratings > 4 ? <FaRegStarHalfStroke className="half-star-icon-wish" />
                                    : <GoStar className="empty-star-icon-wish" />}
                                </div>
                            </div>
                            <p className="product-short-description-wishlist">{product.product_name}</p>
                            <span className={product.sale_price > 0 ? "actual-price-wishlist" : "regular-price-wishlist"}>${product.regular_price}</span>
                            {product.sale_price > 0 && <span className="price-wishlist">${product.sale_price}</span>}
                            <button value={product.id} className={product.already_in_cart ? "cart-check-container-wish" : "cart-container-wishlist"} onClick={addItemToCart}>
                                {product.already_in_cart ? <BsFillCartCheckFill className="cart-check-icon-wish" /> : <BsFillCartPlusFill className="cart-icon-wishlist" />}
                            </button>
                        </div>
                    </div>
                ))}
                {!isLoggedIn ? (
                    <div className='wish-temp-msg'>
                        <h1>Not logged in</h1>
                        <p>Please login to access your wishlist</p>
                    </div>
                ) : products.length == 0 && (
                    <div className='wish-temp-msg'>
                        <h1>Your wishlist is empty</h1>
                        <p>Save products to your wishlist to view them</p>
                    </div>
                )}
            </div>
        </div>
    )
};