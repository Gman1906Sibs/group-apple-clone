import React from "react";
import "./HomeProductCard.css"

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
        </div>
    );
}

export default HomeProductCard;