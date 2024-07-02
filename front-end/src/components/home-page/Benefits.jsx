import React from "react";
import { RiTruckLine } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";
import { LuPiggyBank } from "react-icons/lu";

export default function Benefits() {
    return (
        <section className="home-benefits-section-container">
            <div className="home-benefit-card">
                <div className="home-benefit-card-icon">
                    <LuPiggyBank />
                </div>
                <div className="home-benefit-card-text">
                    <h5>Save Big</h5>
                    <p>Promotions held frequently to save you big.</p>
                </div>
            </div>
            <div className="home-benefit-card">
                <div className="home-benefit-card-icon">
                    <RiTruckLine />
                </div>
                <div className="home-benefit-card-text">
                    <h5>Free Shipping</h5>
                    <p>Free shipping on all orders. No purchase limit required.</p>
                </div>
            </div>
            <div className="home-benefit-card">
                <div className="home-benefit-card-icon">
                    <LuPackageOpen className="home-benefit-box-icon" />
                </div>
                <div className="home-benefit-card-text">
                    <h5>30 Days Return</h5>
                    <p>No questions asked, return within 30 days of purchase.</p>
                </div>
            </div>
        </section>
    )
}