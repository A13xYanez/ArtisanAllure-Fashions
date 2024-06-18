import React from 'react';
import './Authenticate.css';
import { useState } from 'react';
import { MdLockOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Authenticate() {
    const [active, setActive] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const navigate = useNavigate();

    function isActive() {
        setActive(!active);
    };

    function loginUser(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/auth/login", { email, password })
        .then((res) => { navigate("/"); })
        .catch((error) => { console.error(error.response.data.error); });
    };

    function registerUser(e) {
        e.preventDefault();

        if (password != confirmPassword) {
            return console.error("Passwords do not match.")
        }

        axios.post("http://localhost:8080/auth/register", { email, password, first_name, last_name })
        .then((res) => { navigate("/"); })
        .catch((error) => { console.error(error.response.data.error); });
    };

    return (
        <div className="auth-page">
            <div className={active ? 'container sign-up-mode' : 'container'}>
                <div className="signin-signup">
                    <form className="sign-in-form" autoComplete='off' onSubmit={loginUser}>
                        <div className='lock-icon-container'>
                            <MdLockOutline className='lock' />
                        </div>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <input type='text' required onChange={e => setEmail(e.target.value)} />
                            <span>Email Address*</span>
                        </div>
                        <div className="input-field">
                            <input type='password' required onChange={e => setPassword(e.target.value)} />
                            <span>Password*</span>
                        </div>
                        <button className='submit-btn'>SIGN IN</button>
                        <div className="form-links">
                            <p>Forgot Password?</p>
                            <p onClick={isActive}>Don't Have An Account? Sign Up</p>
                        </div>
                    </form>
                    <form className="sign-up-form" autoComplete='off' onSubmit={registerUser}>
                        <div className='lock-icon-container'>
                            <FaUser className='user-icon' />
                        </div>
                        <h2 className="title">Sign up</h2>
                        <div className="name">
                            <div className="input-field">
                                <input type='text' required onChange={e => setFirst_Name(e.target.value)} />
                                <span>First Name*</span>
                            </div>
                            <div className="input-field">
                                <input type='text' required onChange={e => setLast_Name(e.target.value)} />
                                <span>Last Name*</span>
                            </div>
                        </div>
                        <div className="input-field">
                            <input type='text' required onChange={e => setEmail(e.target.value)} />
                            <span>Email Address*</span>
                        </div>
                        <div className="input-field">
                            <input type='password' required onChange={e => setPassword(e.target.value)} />
                            <span>Password*</span>
                        </div>
                        <div className="input-field">
                            <input type='password' required onChange={e => setConfirmPassword(e.target.value)} />
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
                            <h2>Join today and explore the trends</h2>
                            <p>Get access to all of our services. Free Shipping with no purchase requisite. Easy returns within 30 days of order delivery, no questions asked. Promotions and discounts held frequently to save you big.</p>
                        </div>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h1>ArtisanAllure Fashions</h1>
                            <h2>Login to deck out your wardrobe</h2>
                            <p>Get access to all of our services. Free Shipping with no purchase requisite. Easy returns within 30 days of order delivery, no questions asked. Promotions and discounts held frequently to save you big.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};