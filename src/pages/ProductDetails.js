import React from "react";
import Navbar from "../components/Navber";
import CartSideBar from "../components/CartSideBar";
import { useParams } from 'react-router-dom';
import { productsData } from "../assets/data/productData";
import ProductDetailsCard from "../components/ProductDetailsCard";

function ProductDetails() {
    const params = useParams();
    return (
        <div>
            <Navbar />
            <CartSideBar />
            <div className="productDetail">
            {productsData.map(product => {
                    if (product.id == params.id) {
                        return <ProductDetailsCard key={product.id} id={product.id} title={product.title} image={product.image} model={product.model} rating={product.rating.rate} price={product.price} description={product.description} />
                    }
                }
                )}
            </div>
        </div>
    )
}

export default ProductDetails;