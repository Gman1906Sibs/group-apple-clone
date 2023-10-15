import React from "react";
import "./CartSideBar.css"
import { Link } from "react-router-dom";

function CartSideBar(){
    return (
        <div className="cart-side-bar">
            <h4 className="cart-title">Bag</h4>
            <div className="cart-items"></div>
            <Link className="cart-btn">View Bag</Link>
        </div>
    );
}

export default CartSideBar;