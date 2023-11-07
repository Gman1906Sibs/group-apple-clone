import React from "react";
import "./HomeProductCard.css"
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

function HomeProductCard({ image, title, price, model, id}) {
    return (
        <div className='productCard'>
            <div className="imgContainer">
                <img src={image} alt='' />
            </div>
            <div>
                <h5>{title}</h5>
                <p>{model}</p>
                <Link to={`/productDetails/${id}`} className="product-details-btn"><FaShoppingBag /></Link>
                <p>R {price}</p>
            </div>
            
        </div>
    );
}

export default HomeProductCard;