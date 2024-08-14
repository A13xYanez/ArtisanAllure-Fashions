import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function ProductReviews({ refreshPage, setRefreshPage }) {
    const {id} = useParams();
    const [reviews, setReviews] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setRefreshPage(false);
        axios.get(`http://localhost:8080/product/review/${id}/${page}`)
        .then((res) => { setReviews(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, [page, refreshPage, id]);

    function incrementPage() {
        axios.get(`http://localhost:8080/product/review/${id}/${page + 1}`)
        .then((res) => { if (res.data.length) {setPage(page + 1)} })
        .catch((error) => { console.error(error.response.data.error); });
    }

    return (
        <section className='product-review-section'>
            {reviews != undefined && reviews.map((review) => (
                <div className="review-card">
                    <div className="reviewer-info">
                            <p className='reviewer-name'>{review.reviewer}</p>
                            <div className="customer-review-stars-container">
                                {review.rating >= 1 ? <GoStarFill className="reviewer-star" />
                                : <GoStar className="reviewer-star" />}
                                {review.rating >= 2 ? <GoStarFill className="reviewer-star" />
                                : <GoStar className="reviewer-star" />}
                                {review.rating >= 3 ? <GoStarFill className="reviewer-star" />
                                : <GoStar className="reviewer-star" />}
                                {review.rating >= 4 ? <GoStarFill className="reviewer-star" />
                                : <GoStar className="reviewer-star" />}
                                {review.rating == 5 ? <GoStarFill className="reviewer-star" />
                                : <GoStar className="reviewer-star" />}
                            </div>
                            <p className='reviewed-date'>{review.date_reviewed.slice(5, 7)}-{review.date_reviewed.slice(8, 10)}-{review.date_reviewed.slice(0, 4)}</p>
                    </div>
                    <div className="review-content">
                        <p>{review.review}</p>
                    </div>
                </div>
            ))}
            {reviews.length == 0 && (
                <div className='review-temp-msg'>
                    <h1>There are no reviews</h1>
                    <p>Be the first to leave a review</p>
                </div>
            )}
            <div className="pages review-page">
                <FaArrowLeft className='page-arrow' onClick={() => page != 1 && setPage(page - 1)} />
                <h2>{page}</h2>
                <FaArrowRight className='page-arrow' onClick={incrementPage} />
            </div>
        </section>
    )
}