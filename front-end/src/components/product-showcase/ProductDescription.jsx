import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ShowcaseProduct.css';
import img from './assets/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg';
import { useToast } from '../reusable-components/UseToast';

axios.defaults.withCredentials = true;

export default function ProductDescription() {
    const {id} = useParams();
    const [products, setProducts] = useState({});
    const toast = useToast();

    useEffect(() => {
        axios.get(`http://localhost:8080/product/details/${id}`)
        .then((res) => { setProducts(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, [id]);

    function addItemToCart(e) {
        axios.post(`http://localhost:8080/account/addToCart/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully added to cart!"))
        .catch((error) => toast("error", "Please login to add product to cart"));
    };
    
    return (
        <section className='product-details-page'>
            <div className="product-images-container">
                <div className="product-img-cluster">
                    <img className='product-img-small' src={img} />
                    <img className='product-img-small' src={img} />
                    <img className='product-img-small' src={img} />
                </div>
                <img className='product-img-large' src={img} />
            </div>
            <div className="product-details">
                <div>

                <h6>{products.brand}</h6>
                <h4>{products.product_name}</h4>
                <div className="product-details-prices">
                    <h2 className='product-details-regular-price'>${products.regular_price}</h2>
                    <h2 className='product-details-sale-price'>On Sale ${products.sale_price}</h2>
                </div>
                <div className='product-sizes-container'>
                    <p>Select Size:</p>
                    <div className="select-product-size">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XX</button>
                    </div>
                </div>
                <div className="product-input">
                    <input type='number' value='1' />
                    <button value={products.id} onClick={addItemToCart}>Add To Cart</button>
                </div>
                <h3>Product Details</h3>
                <span>{products.description}</span>
                </div>
            </div>
        </section>
    )
}