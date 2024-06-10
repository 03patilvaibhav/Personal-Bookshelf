import React, { useState, useEffect } from 'react';

const BookCard = ({ book }) => {
  
  const [addedBooks, setAddedBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setAddedBooks(storedBooks);
  }, []);

  // const onAddToBookshelf = (book) => {
  //   const updatedBooks = [...addedBooks, book.key];
  //   setAddedBooks(updatedBooks);
  //   localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
  // };
  const onAddToBookshelf = (book) => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    const updatedBooks = [...storedBooks, book.key];
    setAddedBooks(updatedBooks);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
  };
  

  const isBookAdded = (book) => {
    return addedBooks.includes(book.key);
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      <button onClick={() => onAddToBookshelf(book)} disabled={isBookAdded(book)}>
        {isBookAdded(book) ? 'Added' : 'Add to Shelf'}
      </button>
    </div>
  );
};

export default BookCard;
