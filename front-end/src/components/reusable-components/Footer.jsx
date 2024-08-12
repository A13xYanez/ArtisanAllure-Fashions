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
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/cart">View Cart</Link></li>
                        <li><Link to="/wishlist">My Wishlist</Link></li>
                        <li><a>Track My Order</a></li>
                        <li><a>Help</a></li>
                    </ul>
                    <ul className="box">
                        <li className='link-name'>Products</li>
                        <li><Link to="/featured">New & Featured</Link></li>
                        <li><Link to="/mens">Men</Link></li>
                        <li><Link to="/womans">Women</Link></li>
                        <li><Link to="/kids">Kids</Link></li>
                        <li><Link to="/sales">Sale</Link></li>
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