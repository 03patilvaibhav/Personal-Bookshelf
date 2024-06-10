
import './App.css';


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/Searchpage';
import BookshelfPage from './pages/Bookshelfpage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = localStorage.getItem('bookshelf');
    if (storedBookshelf) {
      setBookshelf(JSON.parse(storedBookshelf));
    }
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage onAddToBookshelf={addToBookshelf} />} />
        <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
      </Routes>
    </Router>
  );
};

export default App;
