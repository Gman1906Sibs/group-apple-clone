import React from "react";
import Navbar from "../components/Navber";
import CartSideBar from "../components/CartSideBar";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
    const cartItems = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    return (
        <div>
            <Navbar />
            <CartSideBar />
            <div className="cart-container">
                <h3 className="cart-main-title">Check you bag items</h3>
                <section>
                    {
                        cartItems.map(item => {
                            return (
                                <div>
                                    <p>{item.title}</p>
                                    <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>Remove</button>
                                </div>
                            );
                        })
                    }
                </section>
            </div>
        </div>
    );
}

export default Cart;