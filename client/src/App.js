// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewBookPage from './pages/NewBookPage';
import AudiobookPage from './pages/AudiobookPage';
import EditBookPage from './pages/EditBookPage';
import defaultBooks from './defaultBooks';
import './App.css';

const App = () => {
  const [newBooks, setNewBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setNewBooks([...newBooks, newBook]);
    console.log('All Audiobooks:', [...defaultBooks, ...newBooks, newBook]);
  };

  const handleDeleteBook = (id) => {
    setNewBooks(newBooks.filter(book => book.id !== id));
    console.log('All Audiobooks:', [...defaultBooks, ...newBooks.filter(book => book.id !== id)]);
  };

  const handleEditBook = (updatedBook) => {
    setNewBooks(newBooks.map(book => book.id === updatedBook.id ? updatedBook : book));
    console.log('All Audiobooks:', [...defaultBooks, ...newBooks.map(book => book.id === updatedBook.id ? updatedBook : book)]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage defaultBooks={defaultBooks} newBooks={newBooks} />} />
        <Route path="/newbook" element={<NewBookPage addBook={handleAddBook} />} />
        <Route path="/audiobook/:id" element={<AudiobookPage defaultBooks={defaultBooks} newBooks={newBooks} deleteBook={handleDeleteBook}/>} />
        <Route path="/editbook/:id" element={<EditBookPage defaultBooks={defaultBooks} newBooks={newBooks} editBook={handleEditBook} />} />
      </Routes>
    </Router>
  );
}

export default App;
