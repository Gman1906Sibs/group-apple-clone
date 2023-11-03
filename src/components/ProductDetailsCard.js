import React from 'react'
import "./ProductDetailsCard.css"
import { Link } from 'react-router-dom';

function ProductDetailsCard({ title, image, id, description, model, rating, price }) {
    return (
        <div className='productDetailsCard'>
            <div className='productDetailsTopSection'>
                <img src={image} alt='' />
                <div className='productDetailsTopDescription'>
                    <h5>{title}</h5>
                    <p className='productDetailsModel'>{model}</p>
                    <p className='productDetailsRating'>{rating} / 5</p>
                    <p className='productDetailsPrice'>R {price}</p>
                    <p className='productDetailsDescription'>{description}</p>
                    <Link>Add To Cart</Link>
                </div>
                
            </div>
            <div className='productDetailsBottomSection'>
                <h4 className='productDetailsDescriptionTitle'>Description</h4>
                <p className='productDetailsDescription'>{description}</p>
            </div>
        </div>
    )
}

export default ProductDetailsCard;