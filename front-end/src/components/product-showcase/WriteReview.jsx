import React from 'react';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { IoClose } from "react-icons/io5";

export default function WriteReview({ setIsActive, id }) {
    const [productReview, setProductReview] = useState("");
    const [productRating, setProductRating] = useState(null);

    function disableWriteReview() {
        setIsActive(false);
    }

    function submitProductReview() {
        if (productRating != null && productReview != "") {
            axios.post(`http://localhost:8080/product/create/review/${id}`, { productReview, productRating })
            .then((res) => {setIsActive(false), window.location.reload()})
            .catch((error) => { console.error(error); });
        }
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
                    <h4>Overall rating <span>*</span></h4>
                    <div className='leave-rating-stars-container'>
                        {productRating >= 1 ? <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(1)} /> 
                        : <GoStar className='leave-rating-stars' onClick={() => setProductRating(1)} />}
                        {productRating >= 2 ? <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(2)} /> 
                        : <GoStar className='leave-rating-stars' onClick={() => setProductRating(2)} />}
                        {productRating >= 3 ? <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(3)} /> 
                        : <GoStar className='leave-rating-stars' onClick={() => setProductRating(3)} />}
                        {productRating >= 4 ? <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(4)} /> 
                        : <GoStar className='leave-rating-stars' onClick={() => setProductRating(4)} />}
                        {productRating >= 5 ? <GoStarFill className='leave-rating-stars' onClick={() => setProductRating(5)} /> 
                        : <GoStar className='leave-rating-stars' onClick={() => setProductRating(5)} />}
                    </div>
                </div>
                <div className="leave-review">
                    <h4>Review <span>*</span></h4>
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