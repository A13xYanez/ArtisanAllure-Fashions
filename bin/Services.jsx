import React from 'react'
import { RiTruckLine } from "react-icons/ri";
import { BiSolidPackage } from "react-icons/bi";
import { LiaPiggyBankSolid } from "react-icons/lia";

export default function Services() {
    return (
        <section className='services--section'>
            <div className='box-animation'>
                <div className='services--cards'>
                    <RiTruckLine className='services--icons' />
                    <span className='services--title'>FREE SHIPPING</span>
                    <span className='services--desc'>Free shipping on all orders. No purchase limit required.</span>
                </div>
            </div>
            <div className='box-animation'>
                <div className='services--cards'>
                    <BiSolidPackage className='services--icons' />
                    <span className='services--title'>EASY RETURNS</span>
                    <span className='services--desc'>No questions asked, return within 30 days of purchase.</span>
                </div>
            </div>
            <div className='box-animation'>
                <div className='services--cards'>
                    <LiaPiggyBankSolid className='services--icons' />
                    <span className='services--title'>SAVE MONEY</span>
                    <span className='services--desc'>Promotions held frequently to save you hundreds.</span>
                </div>
            </div>
        </section>
    )
}