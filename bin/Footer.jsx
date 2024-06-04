import React from 'react'
import logo from '../assets/logo2.png'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className='footer-socials'>
                <img src={logo} />
                <div className='social-icons-container'>
                    <div className='instagram-icon-box'>
                        <FaInstagram className='social-icon' />
                    </div>
                    <div className='x-icon-box'>
                        <FaXTwitter className='social-icon' />
                    </div>
                    <div className='youtube-icon-box'>
                        <FaYoutube className='social-icon' />
                    </div>
                    <div className='facebook-icon-box'>
                        <FaFacebookF className='social-icon' />
                    </div>
                    <div className='linkedin-icon-box'>
                        <FaLinkedinIn className='social-icon' />
                    </div>
                </div>
            </div>
            <div className='footer-links'>
                <div className='about-links'>
                    <h3>About</h3>
                    <p>About Us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                </div>
                <div className='account-links'>
                    <h3>Account</h3>
                    <p>Sign In</p>
                    <p>View Cart</p>
                    <p>My Wishlist</p>
                    <p>Track My Order</p>
                    <p>Help</p>
                </div>
                <div className='products-links'>
                    <h3>Products</h3>
                    <p>New & Featured</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Sale</p>
                </div>
                <div className='newsletter'>
                    <h3>Newsletter</h3>
                    <form className='newsletter-form'>
                        <input placeholder='Your Email Address' />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}