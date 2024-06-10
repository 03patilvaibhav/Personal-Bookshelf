
import React, { useState, useEffect, useRef } from 'react';
import '../components/searchbar.css';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    
    onSearch(query);
    debounceTimeout.current = setTimeout(() => {
      onSearch(query);
    }, 500); 

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
