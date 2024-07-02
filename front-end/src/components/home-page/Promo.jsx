import React from 'react';
import promoImg from './assets/promo-img.png';

export default function Promo() {
    return (
        <section className='home-promo-section-container'>
            <div className="home-promo-text-container">
                <div className="home-promo-text">
                    <h3>Deal of the Week</h3>
                    <span>Jackets & Sweaters</span>
                    <h4>Revamp Your Wardrobe With Great Prices All Week Long</h4>
                    <h5>BOGO <span>30% OFF</span> Jackets & Sweaters</h5>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className="home-promo-img-container">
                <img className='home-promo-img' src={promoImg} />
            </div>
        </section>
    )
}