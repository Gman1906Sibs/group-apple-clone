import React from "react";
import "./CartSideBar.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";

function CartSideBar() {
    const cartItems = useSelector(state => state.cart.cart)
    return (
        <div className="cart-side-bar">
            <h4 className="cart-title">Bag</h4>
            <div className="cart-items">{cartItems.map(item => {
                return (
                    <div className="cart-img">
                        <img src={item.image} alt=""/>
                    </div>
                );
            })}</div>
            <Link to="/cart" className="cart-btn"><FaShoppingBag /> View Bag</Link>
        </div>
    );
}

export default CartSideBar;