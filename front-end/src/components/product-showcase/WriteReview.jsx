import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { GoStarFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";

export default function WriteReview({ setIsActive, id }) {
    const [productReview, setProductReview] = useState("");
    const [productRating, setProductRating] = useState(null);

    function disableWriteReview() {
        setIsActive(false);
    }

    function submitProductReview() {
        axios.post(`http://localhost:8080/product/create/review/${id}`, { productReview, productRating })
        .then((res) => setIsActive(false))
        .catch((error) => { console.error(error); });
    }

    return (
        <div className='write-review-container'>
            <div className="create-review">
                <div className='create-review-title'>
                    <div className="header-with-close">
                        <h2>Share your experience</h2>
                        <IoClose className='review-close-icon' onClick={disableWriteReview} />
                    </div>
                </div>
                <div className="leave-rating">
                    <h4>Overall rating</h4>
                    <div className='leave-rating-stars-container'>
                        <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(1)} />
                        <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(2)} />
                        <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(3)} />
                        <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(4)} />
                        <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(5)} />
                    </div>
                </div>
                <div className="leave-review">
                    <h4>Review</h4>
                    <textarea onChange={e => setProductReview(e.target.value)} required />
                </div>
                <div className="close-or-submit-review">
                    <button onClick={disableWriteReview}>Close</button>
                    <button onClick={submitProductReview}>Submit</button>
                </div>
            </div>
        </div>
    )
};