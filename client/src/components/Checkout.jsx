import { useState, useEffect } from 'react'
import { Product } from './Product'
import { CartItem } from './CartItem'

export const Checkout = () => {

    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log(total)
        console.log(localStorage)
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

        fetchCartItems()
        console.log(cartItems)
    }, [])

    return (
        <>
            <h1>Checkout</h1>
            <div>
                {cartItems.map((product) => (<CartItem key={product._id} data={product}/>))}
            </div>
            <h3>{`Total: $${total}`}</h3>
        </>
    )
}