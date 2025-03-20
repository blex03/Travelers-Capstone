import { useState, useEffect } from 'react'
import { Product } from './Product'

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

    const containerStyle = {
        display: 'flex', 
        justifyContent: 'center',   
        alignItems: 'center',
        padding: '10px',
        gap: '30px'
    }
    
    return(
        <>
            <h2>Featured Products!</h2>
            <div style={containerStyle}>
                {featuredProducts.map((product) => (<Product key={product._id} data={product}/>))}
            </div>
        </>
    )
}