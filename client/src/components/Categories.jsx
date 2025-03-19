import { useNavigate } from 'react-router-dom';

export const Categories = () => {

    const navigate = useNavigate()
    
    const searchProducts = (data) => {
        navigate('./products', {state: data});
    }
    
    const fetchWeapons = async () => {
        try {
            console.log("fetching data...")
            const product_data = await fetch(`${import.meta.env.VITE_API_URL}/Weapons`)
            const data = await product_data.json()
            searchProducts(data)
        } catch(error) {
            console.error(error)
        }
    }

    const fetchCostumes = async () => {
        try {
            console.log("fetching data...")
            const product_data = await fetch(`${import.meta.env.VITE_API_URL}/Costumes`)
            const data = await product_data.json()
            searchProducts(data)
        } catch(error) {
            console.error(error)
        }
    }

    const fetchPowers = async () => {
        try {
            console.log("fetching data...")
            const product_data = await fetch(`${import.meta.env.VITE_API_URL}/Powers`)
            const data = await product_data.json()
            searchProducts(data)
        } catch(error) {
            console.error(error)
        }
    }

    const productStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '200px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        boxShadown: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        gap: '10px'
    }

    const onClickCategory = () => {
        console.log("category selected")
    }

    return(
        <>
            <h2>Categories</h2>
            <div style={containerStyle}>
                <button style={productStyle} onClick={fetchWeapons}>
                    <p>Weapons</p>
                    <p>image</p>
                </button>
                <button style={productStyle} onClick={fetchCostumes}>
                    <p>Costumes</p>
                    <p>image</p>
                </button>
                <button style={productStyle} onClick={fetchPowers}>
                    <p>Powers</p>
                    <p>image</p>
                </button>
            </div>
        </>
    )
}