import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ShowcaseProduct.css';
import { useToast } from '../reusable-components/UseToast';

axios.defaults.withCredentials = true;

export default function ProductDescription() {
    const {id} = useParams();
    const [products, setProducts] = useState({});
    const toast = useToast();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`https://artisanallurefashions-backend.onrender.com/product/details/${id}`)
        .then((res) => { setProducts(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, [id]);

    function addItemToCart(e) {
        axios.post(`https://artisanallurefashions-backend.onrender.com/account/addToCart/${(e.target.value)}`)
        .then((res) => toast("success", "Product successfully added to cart!"))
        .catch((error) => toast("error", "Please login to add product to cart"));
    };

    function changeQuantity(value) {
        if (value < 1) {
            setQuantity(1);
        } else if (value > 99) {
            setQuantity(99);
        } else {
            setQuantity(value);
        }
    }
    
    return (
        <section className='product-details-page'>
            <div className="product-images-container">
                <div className="product-img-cluster">
                    <img className='product-img-small' src={`/product-images/${products.product_image}.jpg`} />
                    <img className='product-img-small' src={`/product-images/${products.product_image}.jpg`} />
                    <img className='product-img-small' src={`/product-images/${products.product_image}.jpg`} />
                </div>
                <img className='product-img-large' src={`/product-images/${products.product_image}.jpg`} />
            </div>
            <div className="product-details">
                <div>
                    <h6>{products.brand}</h6>
                    <h4>{products.product_name}</h4>
                    <div className="product-details-prices">
                        <h2 className={products.sale_price > 0 ? 'product-details-regular-price' : 'product-details-no-sale'}>${products.regular_price}</h2>
                        {products.sale_price > 0 && <h2 className='product-details-sale-price'>On Sale ${products.sale_price}</h2>}
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
                        <input type='number' value={quantity} onChange={(e) => changeQuantity(Number(e.target.value))} />
                        <button value={products.id} onClick={addItemToCart}>Add To Cart</button>
                    </div>
                    <h3>Product Details</h3>
                    <span>{products.description}</span>
                </div>
            </div>
        </section>
    )
}