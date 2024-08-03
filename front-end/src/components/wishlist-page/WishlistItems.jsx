import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Wishlist.css';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useToast } from '../reusable-components/UseToast';

axios.defaults.withCredentials = true;

export default function WishlistItems() {
    const [products, setProducts] = useState([]);
    const [refreshPage, setRefreshPage] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toast = useToast();
    let wishlistCount = 0;

    useEffect(() => {
        setRefreshPage(false);

        axios.get(`http://localhost:8080/account/displayProductsInWishlist`)
        .then((res) => { setProducts(res.data), setIsLoggedIn(true) })
        .catch((error) => { console.error(error.response.data.error); });
    }, [refreshPage]);

    function addItemToCart(e) {
        axios.post(`http://localhost:8080/account/addToCart/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully added to cart!"))
        .catch((error) => toast("error", "Please login to add product to cart"));
    };

    function saveItemToWishlist(e) {
        setRefreshPage(true);
        axios.post(`http://localhost:8080/account/saveToWishlist/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully removed from wishlist!"))
        .catch((error) => toast("error", "An unexpected error has occurred"));
    };

    for (let productCount in products) {
        wishlistCount++;
    }

    return (
        <div className='wishlist-items-container'>
            <div className='wishlist-title'>
                <h3>Wishlist</h3>
            </div>
            <div className={wishlistCount <= 3 ? `${products.length == 0 ? "wishlist-adjust-center" : "display-wishlist-lesser-three"}` : "products-display-container-wishlist"}>
                {products.map((product) => (
                    <div className="product-card-wishlist">
                        <div className="product-image-wishlist">
                            <button value={product.id} className="heart-container-wishlist" onClick={saveItemToWishlist}>
                                {<FaRegHeart className="heart-icon-wishlist" />}
                            </button>
                            <span className="discount-tag-wishlist">50% off</span>
                            <img src={product.product_image} className="product-thumb-wishlist" alt="" />
                            <button value={product.id} className="card-btn-wishlist" onClick={saveItemToWishlist}>add to wishlist</button>
                        </div>
                        <div className="product-info-wishlist">
                            <div className="info-title-wishlist">
                                <h2 className="product-brand-wishlist">{product.brand}</h2>
                                <div className="review-stars-wishlist">
                                    <p>5.0</p>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                            </div>
                            <p className="product-short-description-wishlist">{product.product_name}</p>
                            <span className="actual-price-wishlist">${product.regular_price}</span><span className="price-wishlist">${product.sale_price}</span>
                            <button value={product.id} className="cart-container-wishlist" onClick={addItemToCart}>
                                {<BsFillCartPlusFill className="cart-icon-wishlist" />}
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