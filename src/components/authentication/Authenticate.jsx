import React from 'react'
import { useState } from 'react'

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
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <input type='email' required />
                            <span>Email Address*</span>
                        </div>
                        <div className="input-field">
                            <input type='password' required />
                            <span>Password*</span>
                        </div>
                        <button className='btn'>SIGN IN</button>
                        <div className="form-links">
                            <p>forgor</p>
                            <p>already</p>
                        </div>
                    </form>
                    <form action="" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <input type='email' required />
                            <span>Email Address*</span>
                        </div>
                        <div className="input-field">
                            <input type='password' required />
                            <span>Password*</span>
                        </div>
                        <button className='btn'>SIGN UP</button>
                        <div className="form-links">
                            <p>forgor</p>
                            <p>already</p>
                        </div>
                    </form>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Have??</h3>
                            <p>sdc</p>
                            <button className="btn" onClick={isActive}>Sign in</button>
                            <h1 className='image'>image</h1>
                        </div>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Have??</h3>
                            <p>sdc</p>
                            <button className="btn" onClick={isActive}>Sign in</button>
                            <h1 className='image'>image</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}