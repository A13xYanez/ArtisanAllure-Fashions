import React from 'react';
import logo from './assets/logo2.png';
import { Link } from 'react-router-dom';

export default function Footer2() {
    return (
        <footer>
            <div className="footer-content">
                <div className="top">
                    <div className="footer-logo">
                        <Link to='/'><img src={logo} /></Link>
                    </div>
                </div>
                <div className="link-boxes">
                    <ul className="box">
                        <li className='link-name'>About</li>
                        <li><a>About Us</a></li>
                        <li><a>Delivery Information</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Terms & Conditions</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                    <ul className="box">
                        <li className='link-name'>Account</li>
                        <li><a>Sign In</a></li>
                        <li><a>View Cart</a></li>
                        <li><a>My Wishlist</a></li>
                        <li><a>Track My Order</a></li>
                        <li><a>Help</a></li>
                    </ul>
                    <ul className="box">
                        <li className='link-name'>Products</li>
                        <li><a>New & Featured</a></li>
                        <li><a>Men</a></li>
                        <li><a>Women</a></li>
                        <li><a>Kids</a></li>
                        <li><a>Sale</a></li>
                    </ul>
                    <ul className="box input-box">
                        <li className='link-name'>Newsletter</li>
                        <li><input type='text' placeholder='Your Email Address' /></li>
                        <li><input type='button' value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};