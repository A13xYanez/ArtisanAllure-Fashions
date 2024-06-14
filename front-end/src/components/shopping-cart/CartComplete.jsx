import React from 'react'
import ProductsInCart from "./ProductsInCart"
import OrderSummary from "./OrderSummary"

export default function CartComplete() {
    return (
        <div className='cart-complete'>
            <ProductsInCart />
            <OrderSummary />
        </div>
    )
}