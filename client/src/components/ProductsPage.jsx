import React, { useState } from 'react';
import { Product } from './Product'; // Import your Product component
import { Search } from './Search'; // Import your Search component

// Main ProductsPage component
export const ProductsPage = ({ allProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [error, setError] = useState('');

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter products based on search query
    if (query) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);

      // Set error message if no products are found
      if (filtered.length === 0) {
        setError('No products found.');
      } else {
        setError('');
      }
    } else {
      setFilteredProducts(allProducts);
      setError('');
    }
  };

  return (
    <div className="products-page">
      <h1>Products</h1>
      <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="products-list">
        {filteredProducts.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};