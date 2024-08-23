import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo4 from './assets/logo4.png';
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useToast } from '../reusable-components/UseToast';
import './Reuseable.css';

export default function Navbar({ setStopScroll }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
    const toast = useToast();
    let resultRef = useRef();

    function iconClicked() {
        setIsOpen(!isOpen);
    };

    function openSearch() {
        setSearchOpen(!searchOpen);
        setIsOpen(false);

        if (!searchOpen) {
            setStopScroll(true);
        } else {
            setStopScroll(false);
        }
    }

    function searchForProduct(e) {
        e.preventDefault();
        axios.post('https://artisanallurefashions-backend.onrender.com/products/search', { searchQuery })
        .then((res) => setProducts(res.data))
        .catch((error) => toast("error", "Error searching for product, please try again"))
    };

    useEffect(() => {
        let handler = (e) => {
            if ((!resultRef.current.contains(e.target)) && (products.length > 0)) {
                setProducts([]);
            }
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <nav>
            <div className='nav-filler'></div>
            <div className='nav'>
                <Link to='/'><img className='logo' src={logo4} /></Link>
                <div className={isOpen ? 'nav--breakpoint-open' : 'nav--breakpoint'}>
                    <div className='nav--links'>
                        <Link className="link" to='/featured'><p>New & Featured</p></Link>
                        <Link className="link" to='/mens'><p>Men</p></Link>
                        <Link className="link" to='/womans'><p>Women</p></Link>
                        <Link className="link" to='/kids'><p>Kids</p></Link>
                        <Link className="link" to='/sales'><p>Sale</p></Link>
                        <IoClose onClick={iconClicked} className={isOpen ? 'close-menu' : 'close-menu-hidden'} />
                    </div>
                    <div className='nav--extras'>
                            <div className='search-bar'>
                                <form className='search-input-form' onSubmit={searchForProduct}>
                                        <button className='confirm-search' onClick={searchForProduct}>
                                            <RxMagnifyingGlass className='magnifier' />
                                        </button>
                                        <input className='search-input' type='text' placeholder='Search' 
                                        onChange={(e) => setSearchQuery(e.target.value)} />
                                </form>
                            </div>
                        <div className='nav-icons'>
                            <RxMagnifyingGlass className='magnifying-glass' onClick={openSearch} />
                            <Link to='/wishlist'><FaRegHeart className='wish-list icon' /></Link>
                            <Link to='/cart'><PiShoppingCartSimple className='shopping-bag icon' /></Link>
                            <Link to='/login'><FaRegUser className='account icon' /></Link>
                        </div>
                    </div>
                    <div className="search-result" ref={resultRef}>
                        <h2 className={products.length == 0 && "hide-results-text"}>Search Results</h2>
                        {products.map((product) => (
                            <Link to={`/product-details/${product.id}`} className='product-result-link' key={product.id}>
                                <div className="product-result-card">
                                    <img src={`product-images/${product.product_image}.jpg`} />
                                    <div className="product-result-text">
                                        <p>{product.brand}</p>
                                        <h3 className='result-product-name'>{product.product_name}</h3>
                                        <div className="product-result-prices">
                                            <h3 className={product.sale_price > 0 ? "result-regular-price" : "result-no-sales"}>${product.regular_price}</h3>
                                            {product.sale_price > 0 && <h3 className='result-sales-price'>${product.sale_price}</h3>}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {searchOpen && <div className="search-other-view">
                        <div className='search-bar-other'>
                            <form className='search-input-form-other' onSubmit={searchForProduct}>
                                <div className='close-search-other' onClick={openSearch}>
                                    <IoIosArrowBack className='exit-search' />
                                </div>
                                <input className='search-input-other' type='text' placeholder='Search' 
                                onChange={(e) => setSearchQuery(e.target.value)} />
                                <button className='confirm-search-other' onClick={searchForProduct}>
                                    <RxMagnifyingGlass className='magnifier' />
                                </button>
                            </form>
                        </div>
                    </div>}
                    {searchOpen && <div className="search-results-other" ref={resultRef}>
                        <h2 className={products.length == 0 && "hide-results-text"}>Search Results</h2>
                        {products.map((product) => (
                            <Link to={`/product-details/${product.id}`} className='product-result-link' 
                            onClick={(e) => {setStopScroll(false), setSearchOpen(false), setProducts([])}} key={product.id}>
                                <div className="product-result-card-other">
                                    <img src={`product-images/${product.product_image}.jpg`} />
                                    <div className="product-result-text-other">
                                        <p>{product.brand}</p>
                                        <h3 className='result-product-name-other'>{product.product_name}</h3>
                                        <div className="product-result-prices">
                                            <h3 className={product.sale_price > 0 ? "result-regular-price" : "result-no-sales"}>${product.regular_price}</h3>
                                            {product.sale_price > 0 && <h3 className='result-sales-price'>${product.sale_price}</h3>}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>}
                </div>
                <GiHamburgerMenu onClick={iconClicked} 
                className={isOpen || searchOpen ? 'responsive-nav-icon-hidden' : 'responsive-nav-icon'} />
            </div>
        </nav>
    )
};