import { useState, useEffect } from 'react'

export const Featured = () => {
    const [featuredProducts, setFeaturedProducts] = useState({})

    useEffect(()=>{
        const getProductData = async () => {
            const product_data = await fetch(import.meta.env.VITE_API_URL/products)
            const json = await product_data.json()
            setFeaturedProducts(json)
        }

        getProductData()
    }, [])

    return(
        <>
        </>
    )
    
    // return(
    //     <>
    //         <h2>Featured Products!</h2>
    //         <ul>
    //             {featuredProducts.map((product) => (<li key={product._id}>{}</li>))}
    //         </ul>
    //     </>
    // )
}