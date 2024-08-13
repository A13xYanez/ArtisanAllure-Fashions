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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toast = useToast();
    let wishlistCount = 0;
    const [inCart, setInCart] = useState([]);
    const [inWishlist, setInWishList] = useState([]);
    const [rerenderProducts, setRerenderProducts] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/account/displayProductsInWishlist`)
        .then((res) => { setProducts(res.data), setIsLoggedIn(true) })
        .catch((error) => { console.error(error.response.data.error); });

        axios.get('http://localhost:8080/account/displayProductsInCart')
        .then((res) => { setInCart(res.data) })
        .catch((error) => { console.error(error.response.data.error); });

        setRerenderProducts(false);
    }, [rerenderProducts]);

    function addItemToCart(e) {
        axios.post(`http://localhost:8080/account/addToCart/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully added to cart!"), setRerenderProducts(true))
        .catch((error) => toast("error", "Please login to add product to cart"));
    };

    function saveItemToWishlist(e) {
        axios.post(`http://localhost:8080/account/saveToWishlist/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully removed from wishlist!"), setRerenderProducts(true))
        .catch((error) => toast("error", "An unexpected error has occurred"));
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
                    <div className="product-card-wishlist">
                        <div className="product-image-wishlist">
                            <button value={product.id} className={product.already_in_wishlist ? "filled-heart-container-wish" : "heart-container-wishlist"} onClick={saveItemToWishlist}>
                                {product.already_in_wishlist ? <FaHeart className="heart-icon-wishlist" /> : <FaRegHeart className="heart-icon-wishlist" />}
                            </button>
                            <span className="discount-tag-wishlist">50% off</span>
                            <img src={product.product_image} className="product-thumb-wishlist" alt="" />
                            {product.already_in_wishlist ? <button value={product.id} class="card-btn-wishlist-wish" onClick={saveItemToWishlist}>remove from wishlist</button>
                            : <button value={product.id} class="card-btn-wishlist" onClick={saveItemToWishlist}>add to wishlist</button>}
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