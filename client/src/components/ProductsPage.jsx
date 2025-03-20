import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search } from './Search';
import { Product } from './Product';

export const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const productData = location.state 

    useEffect(() => {
        console.log(name)
        console.log(location.state)
    }, [])
    

    const fetchProducts = async (query) => {
        try {
            const response = await fetch(`http://localhost:3000/api/search?q=${query}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchProducts(searchQuery);
        navigate('./products');
        console.log('hi')
    };

    const containerStyle = {
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center',   
        alignItems: 'center',
        padding: '10px',
        gap: '30px'
    }

    return (
        <div>
            <h1>Products</h1>
            <Search
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onSearchSubmit={handleSearchSubmit}
            />
            <div style={containerStyle}>
                {productData.map((product) => (<Product key={product._id} data={product}/>))}
            </div>
        </div>
    );
};