import React from 'react';
import { useParams } from 'react-router-dom';
import './ShowcaseProduct.css';
import img from './assets/47-BRAND-Los-Angeles-Dodgers-47-Clean-Up-Strapback-Hat.jpg';

axios.defaults.withCredentials = true;

export default function ProductDescription() {
    const {id} = useParams();
    
    return (
        <div className='product-details-page'>
            <div className="product-images-container">
                <img className='product-img-large' src={img} />
                <div className="product-img-cluster">
                    <img className='product-img-small' src={img} />
                    <img className='product-img-small' src={img} />
                    <img className='product-img-small' src={img} />
                </div>
            </div>
            <div className="product-details">
                <h6>Brand</h6>
                <h4>Product Name</h4>
                <div className="product-details-prices">
                    <h2 className='product-details-regular-price'>$0.00</h2>
                    <h2 className='product-details-sale-price'>$0.00</h2>
                </div>
                <select>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>L</option>
                    <option>M</option>
                    <option>S</option>
                </select>
                <div className="product-input">
                    <input type='number' value='1' />
                    <button>Add To Cart</button>
                </div>
                <h3>Product Details</h3>
                <span>description here</span>
            </div>
        </div>
    )
}