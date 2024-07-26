import React from 'react';
import { useState, useEffect } from 'react';
import { GoStarFill } from "react-icons/go";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WriteReview from './WriteReview';

axios.defaults.withCredentials = true;

export default function ProductRatings() {
    const {id} = useParams();
    const [ratings, setRatings] = useState();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/product/rating/${id}`)
        .then((res) => { setRatings(res.data); })
        .catch((error) => { console.error(error.response.data.error); });
    }, []);

    return (
        <section>
            {isActive ? <WriteReview setIsActive={setIsActive} id={id} /> : null}
            <div className='product-rating-section'>
                <div className="ratings-total">
                    {ratings != undefined ? (<h2>{ratings.total_reviews} Ratings</h2>) : (<h2>0 Ratings</h2>)}
                </div>
                <div className="contain-summaries">
                    <div className="ratings-summary">
                        <div className="ratings-score">
                            {ratings != undefined ? (<h2>{ratings.rating_avg}</h2>) : (<h2>0</h2>)}
                            <div className="total-stars">
                                <GoStarFill className='product-star-icon' />
                                <GoStarFill className='product-star-icon' />
                                <GoStarFill className='product-star-icon' />
                                <GoStarFill className='product-star-icon' />
                                <GoStarFill className='product-star-icon' />
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