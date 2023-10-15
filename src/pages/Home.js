import React from "react";
import Navbar from "../components/Navber";
import CartSideBar from "../components/CartSideBar";
import HomeProductCard from "../components/HomeProductCard";

function Home() {
    return (
        <div className="home-page">
            <Navbar />
            <CartSideBar />
            <div className="home-container">
                <div className="search-container">
                    <h6 className="search-heading">Search Item</h6>
                    <input className="search-input" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."></input>
                </div>
                <div className="product-list">
                    
                </div>
            </div>
        </div>
    );
}

export default Home;