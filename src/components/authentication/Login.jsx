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
                <h1>Login</h1>
                <input />
                <input />
                <button>SIGN IN</button>
            </form>
        </div>
    )
}