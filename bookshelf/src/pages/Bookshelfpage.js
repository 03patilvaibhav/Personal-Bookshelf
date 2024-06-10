// src/pages/BookshelfPage.js
import React from 'react';
import Bookshelf from '../components/Bookshelf';
import { Link } from 'react-router-dom';
import '../pages/bookshelfpage.css'; // Make sure to import the CSS file

const BookshelfPage = ({ bookshelf }) => {
  console.log('Bookshelf in SearchPage:', bookshelf);
  return (
    <div className="bookshelf-page">
      <nav className="navbar">
      <div className="shelf-title">Myshelf</div>
        <Link to="/" className="back-button">Back to Search</Link>
      </nav>
      <Bookshelf books={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
