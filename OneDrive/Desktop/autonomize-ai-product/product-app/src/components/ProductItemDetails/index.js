import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots} from "react-loader-spinner"
import './index.css';

export default function ProductItemDetails() {
    const { id } = useParams();
    const [productData, updateProductData] = useState(null)

    useEffect(() => {
        async function getProductDetails() {
            try {
                const fetchDetails = await fetch(`https://fakestoreapi.com/products/${id}`, { method: 'GET' });
                const jsonData = await fetchDetails.json();
                updateProductData(jsonData);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        }

        getProductDetails();
    }, [id]);
    if (!productData) {

        return <div className='loader'>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>;
    }

    return (
        <div className='product-details-container'>
            <img src={productData.image} alt={productData.title} className='product-details-image' />
            <div className='product-details'>
                <h1 className='product-details-title'>{productData.title}</h1>
                <p className='product-details-description'>{productData.description}</p>
                <div className='price-container'>
                    <span className='product-details-price'>$ {productData.price}</span>
                    <span className='product-rating'>{productData.rating.rate}</span>
                </div>

                <button type="button" className='add-to-cart'>Add Cart</button>
            </div>
        </div>
    );
}
