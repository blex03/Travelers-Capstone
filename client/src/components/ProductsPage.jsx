import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from './Search';

export const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

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

    return (
        <div>
            <h1>Products</h1>
            <Search
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                onSearchSubmit={handleSearchSubmit}
            />
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};