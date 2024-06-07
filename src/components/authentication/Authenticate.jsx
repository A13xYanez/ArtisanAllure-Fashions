import React from 'react'
import { useState } from 'react'
import { MdLockOutline } from "react-icons/md"
import { FaUser } from "react-icons/fa6";

export default function Authenticate() {
    const [active, setActive] = useState(false)

    function isActive() {
        setActive(!active)
    }

    return (
        <div className="auth-page">
            <div className={active ? 'container sign-up-mode' : 'container'}>
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <div className='lock-icon-container'>
                            <MdLockOutline className='lock-icon' />
                        </div>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <input type='email' required />
                            <span>Email Address*</span>
                        </div>
                        <div className="input-field">
                            <input type='password' required />
                            <span>Password*</span>
                        </div>
                        <button className='submit-btn'>SIGN IN</button>
                        <div className="form-links">
                            <p>Forgot Password?</p>
                            <p onClick={isActive}>Don't Have An Account? Sign Up</p>
                        </div>
                    </form>
                    <form action="" className="sign-up-form">
                        <div className='lock-icon-container'>
                            <FaUser className='user-icon' />
                        </div>
                        <h2 className="title">Sign up</h2>
                        <div className="name">
                            <div className="input-field">
                                <input type='text' required />
                                <span>First Name*</span>
                            </div>
                            <div className="input-field">
                                <input type='text' required />
                                <span>Last Name*</span>
                            </div>
                        </div>
                        <div className="input-field">
                            <input type='email' required />
                            <span>Email Address*</span>
                        </div>
                        <div className="input-field">
                            <input type='password' required />
                            <span>Password*</span>
                        </div>
                        <div className="input-field">
                            <input type='password' required />
                            <span>Confirm Password*</span>
                        </div>
                        <button className='submit-btn'>SIGN UP</button>
                        <div className="form-links">
                            <p onClick={isActive}>Already Have An Account? Sign In</p>
                        </div>
                    </form>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h1>ArtisanAllure Fashions</h1>
                            <h2>Join today to find your next outfit</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h1>ArtisanAllure Fashions</h1>
                            <h2>Login to deck out your wardrobe</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}