import React from 'react'
import { useState } from 'react'
import './Authenticate.css'
import img from './assets/login-background.png'
import { MdLockOutline } from "react-icons/md"
import { FaUser } from "react-icons/fa6";

export default function Login() {
    const [active, setActive] = useState(false)

    function slide() {
        setActive(!active)
    }

    return (
        <div className='login-page'>
            <div className={active ? 'login-img-active' : 'login-img'}>
                <img src={img} />
            </div>
            <form className={active ? 'register-form-active auth-form' : 'register-form auth-form'}>
                <div className='lock-icon-container'>
                    <FaUser className='user-icon' />
                </div>
                <h1>Sign up</h1>
                <div className="users-name">
                    <input type="text" placeholder='First Name*' required />
                    <input type="text" placeholder='Last Name*' required />
                </div>
                <input placeholder='Email Address*' type='email' required />
                <input placeholder='Password*' type='password' required />
                <input placeholder='Confirm Password*' type='password' required />
                <button>SIGN UP</button>
                <div className='login-links'>
                    <p>Forgot Password?</p>
                    <p onClick={slide}>Already Have An Account? Sign In</p>
                </div>
            </form>
            <form className={active ? 'login-form-active auth-form' : 'login-form auth-form'}>
                <div className='lock-icon-container'>
                    <MdLockOutline className='lock-icon' />
                </div>
                <h1>Sign in</h1>
                <input placeholder='Email Address*' type='email' required />
                <input placeholder='Password*' type='password' required />
                <button>SIGN IN</button>
                <div className='login-links'>
                    <p>Forgot Password?</p>
                    <p onClick={slide}>Don't Have An Account? Sign Up</p>
                </div>
            </form>
        </div>
    )
}