import { useState, useEffect } from 'react'

export const Featured = () => {
    const [featuredProducts, setFeaturedProducts] = useState([])

    useEffect(() => {

    })
    useEffect(()=>{
        const getProductData = async () => {
            try {
                console.log("fetching data...")
                const product_data = await fetch(`${import.meta.env.VITE_API_URL}/products`)
                const json = await product_data.json()
                const featured_product_data = json.slice(0, 3)
                setFeaturedProducts(featured_product_data)
            } catch(error) {
                console.error(error)
            }
        }
        getProductData()
    }, [])
    
    return(
        <>
            <h2>Featured Products!</h2>
            <ul>
                {console.log(featuredProducts)}
                {featuredProducts.map((product) => (<li key={product._id}>{product.name}</li>))}
            </ul>
        </>
    )
}