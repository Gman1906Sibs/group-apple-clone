import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";
import { Link } from "react-router-dom";

function Checkout() {
    const cartItems = useSelector(state => state.cart.cart);
    return (
        <div className="checkout-container">
            <div className="order-summary-main">
                <section className="shipping-section">
                    <h4>Shipping Address</h4>
                    <div className="payment-column">
                        <div>
                            <p>John Maker</p>
                            <p>123 Plae Grond Street</p>
                            <p>Centurion, Pretoria</p>
                        </div>
                        <Link to="/shipping" className="change-btn">Change</Link>
                    </div>
                </section>
                <section className="payment-section">
                    <h4>Payment Method</h4>
                    <div className="payment-column">
                        <div>
                            <p><strong>Mastercard</strong> ending in 1252</p>
                            <p><strong>R50.49</strong> giftcard balance</p>
                            <p><strong>Billing Address same as shipping address</strong></p>
                        </div>
                        <Link to="/payment" className="change-btn">Change</Link>
                    </div>
                </section>
                <section className="review-products-section">
                    <h4>Review your bag</h4>
                    {
                        cartItems.map(item => {
                            return (
                                <CartProductCard key={item.id} id={item.id} title={item.title} image={item.image} model={item.model} price={item.price} rating={item.rating} description={item.description} />
                            );
                        })
                    }
                </section>
            </div>
            <div className="order-summary">
                <div className="order-summary-card">
                    <h4>Order Summary</h4>
                    <p>Items</p>
                    <p>Shipping</p>
                    <p>Estimated GST</p>
                    <p>Gift Card</p>
                    <p>Order Total</p>
                    <Link to="/success" className="order-btn">Place Your Order</Link>
                </div>
                <Link to="/cart" className="back-btn">Back</Link>
            </div>
        </div>
    );
}

export default Checkout;