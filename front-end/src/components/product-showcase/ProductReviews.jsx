import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GoStarFill } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function ProductReviews() {
    const {id} = useParams();
    const [reviews, setReviews] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8080/product/review/${id}/${page}`)
        .then((res) => { setReviews(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, [page]);

    return (
        <section className='product-review-section'>
            {reviews.map((review) => (
            <div className="review-card">
                <div className="reviewer-info">
                        <p className='reviewer-name'>{review.reviewer}</p>
                        <div className="customer-review-stars-container">
                            <GoStarFill className='reviewer-star' />
                            <GoStarFill className='reviewer-star' />
                            <GoStarFill className='reviewer-star' />
                            <GoStarFill className='reviewer-star' />
                            <GoStarFill className='reviewer-star' />
                        </div>
                        <p className='reviewed-date'>{review.date_reviewed.slice(5, 7)}-{review.date_reviewed.slice(8, 10)}-{review.date_reviewed.slice(0, 4)}</p>
                </div>
                <div className="review-content">
                    <p>{review.review}</p>
                </div>
            </div>
            ))}
            <div className="pages review-page">
                <FaArrowLeft className='page-arrow' onClick={() => page != 1 ? setPage(page - 1) : setPage(page)} />
                <h2>{page}</h2>
                <FaArrowRight className='page-arrow' onClick={() => setPage(page + 1)} />
            </div>
        </section>
    )
}