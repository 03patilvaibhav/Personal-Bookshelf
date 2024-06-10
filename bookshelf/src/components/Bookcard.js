import React, { useState } from 'react';

const BookCard = ({ book, onAddToBookshelf }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBookshelf = () => {
    onAddToBookshelf(book);
    setIsAdded(true); 
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500); 
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
      <button onClick={handleAddToBookshelf} disabled={isAdded}>
        {isAdded ? 'Added ✓' : 'Add to Bookshelf'}
      </button>
    </div>
  );
};

export default BookCard;
