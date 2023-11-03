import React from "react";
import "./HomeProductCard.css"
import { Link } from "react-router-dom";

function HomeProductCard({ image, title, price, model }) {
    return (
        <div className='productCard'>
            <div className="imgContainer">
                <img src={image} alt='' />
            </div>
            <div>
                <h5>{title}</h5>
                <p>{model}</p>
                <p>R {price}</p>
            </div>
            <Link to={`/productDetails`}>More</Link>
        </div>
    );
}

export default HomeProductCard;