import React from "react";
import Navbar from "../components/Navber";
import { useSelector } from "react-redux";
// import { removeFromCart } from "../redux/cartSlice";
import CartProductCard from "../components/CartProductCard";
import CheckoutSideBar from "../components/CheckoutSideBar";

function Cart() {
    const cartItems = useSelector(state => state.cart.cart);
    // const dispatch = useDispatch();
    return (
        <div>
            <Navbar />
            < CheckoutSideBar/>
            <div className="cart-container">
                <h3 className="cart-main-title">Check you bag items</h3>
                <section>
                    {
                        cartItems.map(item => {
                            return (
                                <CartProductCard key={item.id} id={item.id} title={item.title} image={item.image} model={item.model} price={item.price} rating={item.rating} description={item.description}/>
                            );
                        })
                    }
                </section>
            </div>
        </div>
    );
}

export default Cart;