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
                <img className='logo' src={logo4} />
                <div className={isOpen ? 'nav--breakpoint-open' : 'nav--breakpoint'}>
                    <div className='nav--links'>
                        <Link  className="link" to='/featured'><p>New & Featured</p></Link>
                        <Link className="link"><p>Men</p></Link>
                        <Link className="link"><p>Women</p></Link>
                        <Link className="link"><p>Kids</p></Link>
                        <Link className="link"><p>Sale</p></Link>
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
                            <FaRegHeart className='wish-list icon' />
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