// src/pages/SearchPage.js
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import SearchBar from '../components/Searchbar';
import BookCard from '../components/Bookcard';
import { Link } from 'react-router-dom';
import '../pages/searchpage.css'; // Make sure to import the CSS file

const SearchPage = ({ onAddToBookshelf }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = useCallback(async (query) => {
    if (query.trim()) {
      setLoading(true);
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setBooks([]);
      setLoading(false);
    }
  }, []);

  return (
    <div className="search-page">
      <nav className="navbar">
        <SearchBar onSearch={handleSearch} />
        <Link to="/bookshelf" className="bookshelf-button">Go to My Bookshelf</Link>
      </nav>
      <div className="search-results">
        {loading ? (
          <div className="loader"></div>
        ) : (
          books.map((book, index) => (
            <BookCard key={index} book={book} onAddToBookshelf={onAddToBookshelf} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
