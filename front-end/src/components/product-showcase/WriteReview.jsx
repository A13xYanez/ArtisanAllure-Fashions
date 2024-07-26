import React from 'react';
import { useState } from 'react';
import { GoStarFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";

export default function WriteReview({ isActive, setIsActive }) {
    return (
        <div className={isActive ? 'write-review-container' : 'write-review-disabled'}>
            <form className="create-review">
                <div className='create-review-title'>
                    <div className="header-with-close">
                        <h2>Share your experience</h2>
                        <IoClose className='review-close-icon' onClick={(e) => {e.preventDefault, setIsActive(false)}} />
                    </div>
                    <p>Product Name</p>
                </div>
                <div className="leave-rating">
                    <h4>Overall rating</h4>
                    <div className='leave-rating-stars-container'>
                        <GoStarFill className='leave-rating-stars' />
                        <GoStarFill className='leave-rating-stars' />
                        <GoStarFill className='leave-rating-stars' />
                        <GoStarFill className='leave-rating-stars' />
                        <GoStarFill className='leave-rating-stars' />
                    </div>
                </div>
                <div className="leave-review">
                    <h4>Review</h4>
                    <textarea />
                </div>
                <div className="close-or-submit-review">
                    <button onClick={(e) => {e.preventDefault, setIsActive(false)}}>Close</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
};