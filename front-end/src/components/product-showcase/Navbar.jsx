import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo4 from './assets/logo4.png'
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function iconClicked() {
        setIsOpen(!isOpen)
    }

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
                            <div className='confirm-search'>
                                <RxMagnifyingGlass className='magnifier' />
                            </div>
                            <input className='search-input' type='text' placeholder='Search' />
                        </div>
                        <div className='nav-icons'>
                            <Link to='/wishlist'><FaRegHeart className='wish-list icon' /></Link>
                            <Link to='/cart'><PiShoppingCartSimple className='shopping-bag icon' /></Link>
                            <Link to='/login'><FaRegUser className='account icon' /></Link>
                        </div>
                    </div>
                </div>
                <GiHamburgerMenu onClick={iconClicked} className={isOpen ? 'responsive-nav-icon-hidden' : 'responsive-nav-icon'} />
            </div>
        </nav>
    )
}