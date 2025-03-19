import React from 'react';

export const Search = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
    return (
        <form onSubmit={onSearchSubmit}>
            <h3>Search:</h3>
            <input
                type="text"
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Enter search term..."
            />
            <button type="submit">Search</button>
        </form>
    );
};