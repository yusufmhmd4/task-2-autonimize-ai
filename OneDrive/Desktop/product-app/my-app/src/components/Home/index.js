import React, { useEffect, useState } from 'react'
import CategoryItem from "../CategoryItem"
import ProductItem from "../ProductItem"
import { ThreeDots } from 'react-loader-spinner'
import "./index.css"

const categorylist = ["electronics", "jewelery", "men's clothing", "women's clothing"];

function Home() {
    const [productsList, updateProductsList] = useState([])
    const [isLoading, updateIsLoading] = useState(false)
    const [activeCategoryId, updateActiveCategoryId] = useState("electronics")

    useEffect(() => {
        async function getProductsData() {
            updateIsLoading(true)
            const fetchDetails = await fetch('https://fakestoreapi.com/products/');
            const jsonData = await fetchDetails.json()
            updateProductsList(jsonData)
            updateIsLoading(false)
        }
        getProductsData()
    }, [])

    function loaderSpinner() {
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

    const searchResults = productsList.filter(product => product.category === activeCategoryId)

    return (
        <div className='home-container'>
            <h1 className='home-heading'>ALL PRODUCTS</h1>
            <ul className='category-list-container'>
                {
                    categorylist.map((category, index) =>
                        <CategoryItem key={index} category={category} updateActiveCategoryId={updateActiveCategoryId} isActive={category === activeCategoryId} updateIsLoading={updateIsLoading}/>
                    )
                }
            </ul>
            <ul className='product-list-container'>
                {isLoading ? loaderSpinner() : searchResults.map(product =>
                    <ProductItem key={product.id} product={product} />
                )}
            </ul>

        </div>
    )
}

export default Home