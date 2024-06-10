
import React from 'react';

const Bookshelf = ({ books }) => {
  console.log('Books in Bookshelf:', books);
  return (
    <div className="bookshelf">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
