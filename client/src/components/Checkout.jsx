import { useState, useEffect } from 'react'
import { Product } from './Product'
import { CartItem } from './CartItem'

export const Checkout = () => {

    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const [recommendations, setRecommendations] = useState([])

    useEffect(() => {
        fetchCartItems()
    }, [])

    const fetchCartItems = async () => {
        try {
            console.log("fetching data...")
            const product_data = await fetch(`${import.meta.env.VITE_API_URL}/cart/${localStorage.username}`)
            console.log(product_data)
            const json = await product_data.json()
            setCartItems(json)

            let totalCost = 0
            for (const product of json) {
                totalCost += product.price
            }

            setTotal(totalCost)
            
        } catch(error) {
            console.error(error)
        }
    }

    const onDelete = async (itemId) => {
        await fetch(`${import.meta.env.VITE_API_URL}/items/${localStorage.username}/${itemId}`, { method: 'DELETE'})
        fetchCartItems()

        console.log(`Deleting ${itemId} from ${localStorage.username}'s cart`)
    }

    const recommendProduct = async () => {
        if (cartItems.length === 0) {
            console.log("Cart is empty, no product to recommend.")
            return
        }

        const lastProduct = cartItems[cartItems.length - 1]

        // Prepare the data for the POST request
        const productData = {
            _id: lastProduct._id,
            name: lastProduct.name,
            price: lastProduct.price,
            category: lastProduct.category,
            popularity: lastProduct.popularity,
            durability: lastProduct.durability
        }
        console.log(productData)

        try {
            const response = await fetch(`http://127.0.0.1:5000/recommend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })

            const recommendations = await response.json()
            console.log("Recommended products:", recommendations)
            setRecommendations(recommendations)
        } catch (error) {
            console.error("Error fetching recommendations:", error)
        }
    }

    const totalStyle = {
        position: 'fixed',
        top: '200px',
        right: '300px'
    }

    const containerStyle = {
        display: 'flex', 
        justifyContent: 'center',   
        alignItems: 'center',
        padding: '10px',
        gap: '30px'
    }
    return (
        <>
            <h1>Checkout</h1>
            <div>
                {cartItems.map((product) => (<CartItem deleteFunction={onDelete} key={product._id} data={product}/>))}
            </div>
            <h1 style={totalStyle}>{`Total: $${total.toFixed(2)}`}</h1>
            <button onClick={recommendProduct}>Get Recommendations</button>
            <div>
                <h1>Recommended Products</h1>
                <div style={containerStyle}>
                {recommendations.map((product) => (<Product key={product._id} data={product}/>))}
            </div>
            </div>
        </>
    )
}
