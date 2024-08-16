import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useToast } from '../reusable-components/UseToast';

axios.defaults.withCredentials = true;

export default function OnSaleProductscroller() {
    const [products, setProducts] = useState([]);
    const toast = useToast();
    const [inCart, setInCart] = useState([]);
    const [inWishlist, setInWishList] = useState([]);
    const [rerenderProducts, setRerenderProducts] = useState(false);

    useEffect(() => {
        if (!rerenderProducts) {
            axios.get('http://localhost:8080/home/sale')
            .then((res) => { setProducts(res.data); })
            .catch((error) => { console.error(error.response.data.error); });
        }

        axios.get('http://localhost:8080/account/displayProductsInCart')
        .then((res) => { setInCart(res.data) })
        .catch((error) => { console.error(error.response.data.error); });

        axios.get(`http://localhost:8080/account/displayProductsInWishlist`)
        .then((res) => { setInWishList(res.data) })
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
        .then((res) => toast("success", "Product successfully saved to wishlist!"), setRerenderProducts(true))
        .catch((error) => toast("error", "Please login to save product to wishlist"));
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
        <section className="product-home">
            <div className="section-header-home">
                <h2 className="product-category-home">On Sale</h2>
                <Link to="/sales"><button>Explore More</button></Link>
            </div>
            <button class="pre-btn-home">{<IoIosArrowForward className="arrow-icon-home" />}</button>
            <button class="nxt-btn-home">{<IoIosArrowForward className="arrow-icon-home" />}</button>
            <button className="pre-btn-home"></button>
            <button className="nxt-btn-home"></button>
            <div className="product-container-home">
                {products.map((product) => (
                    <div className="product-card-home">
                        <div className="product-image-home">
                            <button value={product.id} className={product.already_in_wishlist ? "filled-heart-container-home" : "heart-container-home"} onClick={saveItemToWishlist}>
                                {product.already_in_wishlist ? <FaHeart className="heart-icon-home" /> : <FaRegHeart className="heart-icon-home" />}
                            </button>
                            <span className="discount-tag-home">50% off</span>
                            <Link to={`/product-details/${product.id}`}><img src={product.product_image} className="product-thumb-home" alt="" /></Link>
                            {product.already_in_wishlist ? <button value={product.id} class="card-btn-wishlist-home" onClick={saveItemToWishlist}>remove from wishlist</button>
                            : <button value={product.id} class="card-btn-home" onClick={saveItemToWishlist}>add to wishlist</button>}
                        </div>
                        <div className="product-info-home">
                            <div className="info-title-home">
                                <h2 className="product-brand-home">{product.brand}</h2>
                                <div className="review-stars-home">
                                    {product.ratings >= 1 ? <GoStarFill className="filled-star-icon-home" />
                                    : product.ratings < 1 && product.ratings > 0 ? <FaRegStarHalfStroke className="half-star-icon-home" />
                                    : <GoStar className="empty-star-icon-home" />}
                                    {product.ratings >= 2 ? <GoStarFill className="filled-star-icon-home" />
                                    : product.ratings < 2 && product.ratings > 1 ? <FaRegStarHalfStroke className="half-star-icon-home" />
                                    : <GoStar className="empty-star-icon-home" />}
                                    {product.ratings >= 3 ? <GoStarFill className="filled-star-icon-home" />
                                    : product.ratings < 3 && product.ratings > 2 ? <FaRegStarHalfStroke className="half-star-icon-home" />
                                    : <GoStar className="empty-star-icon-home" />}
                                    {product.ratings >= 4 ? <GoStarFill className="filled-star-icon-home" />
                                    : product.ratings < 4 && product.ratings > 3 ? <FaRegStarHalfStroke className="half-star-icon-home" />
                                    : <GoStar className="empty-star-icon-home" />}
                                    {product.ratings == 5 ? <GoStarFill className="filled-star-icon-home" />
                                    : product.ratings < 5 && product.ratings > 4 ? <FaRegStarHalfStroke className="half-star-icon-home" />
                                    : <GoStar className="empty-star-icon-home" />}
                                </div>
                            </div>
                            <p className="product-short-description-home">{product.product_name}</p>
                            <span className="actual-price-home">${product.regular_price}</span><span className="price-home">${product.sale_price}</span>
                            <button value={product.id} className={product.already_in_cart ? "cart-check-container-home" : "cart-container-home"} onClick={addItemToCart}>
                                {product.already_in_cart ? <BsFillCartCheckFill className="cart-check-icon-home" /> : <BsFillCartPlusFill className="cart-icon-home" />}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};