import React from 'react';
import { useState, useEffect } from 'react';
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WriteReview from './WriteReview';

axios.defaults.withCredentials = true;

export default function ProductRatings({ isActive, setIsActive, refreshPage, setRefreshPage }) {
    const {id} = useParams();
    const [ratings, setRatings] = useState();

    useEffect(() => {
        setRefreshPage(false);
        axios.get(`http://localhost:8080/product/rating/${id}`)
        .then((res) => { setRatings(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, [refreshPage, id]);

    return (
        <section>
            {isActive ? <WriteReview setIsActive={setIsActive} setRefreshPage={setRefreshPage} id={id} /> : null}
            <div className='product-rating-section'>
                <div className="ratings-total">
                    {ratings != undefined ? (<h2>{ratings.total_reviews} Ratings</h2>) : (<h2>0 Ratings</h2>)}
                </div>
                <div className="contain-summaries">
                    <div className="ratings-summary">
                        <div className="ratings-score">
                            {ratings != undefined ? (<h2>{ratings.rating_avg}</h2>) : (<h2>0</h2>)}
                            <div className="total-stars">
                                {ratings && (ratings.rating_avg >= 1 ? <GoStarFill className="product-star-icon" />
                                : ratings.rating_avg < 1 && ratings.rating_avg > 0 ? <FaRegStarHalfStroke className="product-star-icon" />
                                : <GoStar className="product-star-icon" />)}
                                {ratings && (ratings.rating_avg >= 2 ? <GoStarFill className="product-star-icon" />
                                : ratings.rating_avg < 2 && ratings.rating_avg > 1 ? <FaRegStarHalfStroke className="product-star-icon" />
                                : <GoStar className="product-star-icon" />)}
                                {ratings && (ratings.rating_avg >= 3 ? <GoStarFill className="product-star-icon" />
                                : ratings.rating_avg < 3 && ratings.rating_avg > 2 ? <FaRegStarHalfStroke className="product-star-icon" />
                                : <GoStar className="product-star-icon" />)}
                                {ratings && (ratings.rating_avg >= 4 ? <GoStarFill className="product-star-icon" />
                                : ratings.rating_avg < 4 && ratings.rating_avg > 3 ? <FaRegStarHalfStroke className="product-star-icon" />
                                : <GoStar className="product-star-icon" />)}
                                {ratings && (ratings.rating_avg == 5 ? <GoStarFill className="product-star-icon" />
                                : ratings.rating_avg < 5 && ratings.rating_avg > 4 ? <FaRegStarHalfStroke className="product-star-icon" />
                                : <GoStar className="product-star-icon" />)}
                            </div>
                            <button onClick={() => setIsActive(true)}>Write A Review</button>
                        </div>
                    </div>
                    <div className="stars-summary">
                        <h4>Ratings Summary</h4>
                        <div className="stars-quantity">
                            <span>5</span>
                            <div className='contain-star-cluster'>
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                            </div>
                            {ratings != undefined ? (<span>({ratings.five_stars})</span>) : (<span>0</span>)}
                        </div>
                        <div className="stars-quantity">
                            <span>4</span>
                            <div className='contain-star-cluster'>
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                            </div>
                            {ratings != undefined ? (<span>({ratings.four_stars})</span>) : (<span>0</span>)}
                        </div>
                        <div className="stars-quantity">
                            <span>3</span>
                            <div className='contain-star-cluster'>
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                            </div>
                            {ratings != undefined ? (<span>({ratings.three_stars})</span>) : (<span>0</span>)}
                        </div>
                        <div className="stars-quantity">
                            <span>2</span>
                            <div className='contain-star-cluster'>
                                <GoStarFill className='star-icon-cluster' />
                                <GoStarFill className='star-icon-cluster' />
                            </div>
                            {ratings != undefined ? (<span>({ratings.two_stars})</span>) : (<span>0</span>)}
                        </div>
                        <div className="stars-quantity">
                            <span>1</span>
                            <div className='contain-star-cluster'>
                                <GoStarFill className='star-icon-cluster' />
                            </div>
                            {ratings != undefined ? (<span>({ratings.one_stars})</span>) : (<span>0</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}