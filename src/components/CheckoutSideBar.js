import React from "react";
import "./CartSideBar.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CheckoutSideBar() {
    const cartItems = useSelector(state => state.cart.cart)
    return (
        <div className="cart-side-bar">
            <h4 className="cart-title">Bag</h4>
            <div className="cart-items">{cartItems.map(item => {
                return (
                    <div>
                        <img src={item.image} alt=""/>
                    </div>
                );
            })}</div>
            <Link to="/checkout" className="cart-btn">Checkout</Link>
        </div>
    );
}

export default CheckoutSideBar;