// src/components/SearchBar.js
import React, { useState, useEffect, useRef } from 'react';
import '../components/searchbar.css';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    // Call onSearch immediately to handle loader
    onSearch(query);
    debounceTimeout.current = setTimeout(() => {
      onSearch(query);
    }, 500); // Adjust the delay as needed

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [query, onSearch]);

  
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="search-input"
      />
      {/* <button onClick={handleSearch} className="search-button">Search</button> */}
    </div>
  );
};

export default SearchBar;
