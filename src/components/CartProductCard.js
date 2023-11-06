import React from "react";
import "../components/CartProductCard.css";

function CartProductCard({ image, title, model, price, description, rating, id }) {
    return (
        <div className="cart-product-card">
            <img src={image} alt="" />
            <div>
                <h4>{title}</h4>
                <p>{model}</p>
                <p>{description}</p>
                <p>{rating} / 5</p>
                <p>R {price}</p>
            </div>
            <div className="quantity-counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
        </div>
    );
}

export default CartProductCard;