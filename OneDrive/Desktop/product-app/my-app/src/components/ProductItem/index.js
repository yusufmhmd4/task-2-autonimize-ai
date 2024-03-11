import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./index.css"

function ProductItem(props) {
    const [seeMore, updateSeeMore] = useState(true)
    const { product } = props
    const { title, id, image, price, description, rating } = product


    return (
        <Link className='product-item' to={`products/${id}`}>
            <li >
                <img src={image} alt={title} className='product-image' />
                <div className='product-details-container'>
                    <h1 className='product-title'>{title}</h1>
                    <p className='product-description'>{seeMore ? description.slice(0, 80) : description}{<span className='see-more-less' onClick={() => updateSeeMore(!seeMore)}>...{seeMore ? 'See More' : 'See Less'}</span>}</p>

                    <div className='price-container'>
                        <span className='product-price'>$ {price}</span>
                        <span className='product-rating'>{rating.rate}</span>
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ProductItem
