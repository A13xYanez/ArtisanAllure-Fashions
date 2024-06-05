import React from 'react'
import './Authenticate.css'
import img from './assets/login-background.png'
import { MdLockOutline } from "react-icons/md";

export default function Login() {
    return (
        <div className='login-page'>
            <div className="login-img">
                <img src={img} />
            </div>
            <form className="login-form">
                <div className='lock-icon-container'>
                    <MdLockOutline className='lock-icon' />
                </div>
                <h1>Sign in</h1>
                <input placeholder='Email Address*' type='email' required />
                <input placeholder='Password*' type='password' required />
                <button>SIGN IN</button>
                <div className='login-links'>
                    <p>Forgot Password?</p>
                    <p>Don't Have An Account? Sign Up</p>
                </div>
            </form>
        </div>
    )
}