import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Search = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
   
    const fetchProducts = async (query) => {
        try {
            const response = await fetch(`http://localhost:3000/api/search?q=${query}`);
            const data = await response.json();
            setProducts(data);

            if (location.pathname === '/') {
                navigate('./products', {state: data});
            } else if (location.pathname === '/products') {
                navigate('', {state: data})
            }

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const data = fetchProducts(searchQuery);
    };
    
    return (
        <form onSubmit={handleSearchSubmit}>
            <h3>Search:</h3>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Enter search term..."
            />
            <button type="submit">Search</button>
        </form>
    );
};