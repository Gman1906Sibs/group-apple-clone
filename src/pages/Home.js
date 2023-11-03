import React from "react";
import { productsData } from "../assets/data/productData";
import HomeProductCard from "../components/HomeProductCard";
import Navbar from "../components/Navber";
import CartSideBar from "../components/CartSideBar";

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
                    {productsData.map((products) =>
                        <HomeProductCard key={products.id} id={products.id} title={products.title} image={products.image} price={products.price} model={products.model} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;