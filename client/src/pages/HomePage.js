// src/pages/HomePage.js
import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [books, setBooks] = useState([]); // containes books from back-end
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all books from the backend
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/audiobooks');
        setBooks(response.data);

        // Log IDs of all audiobooks
        // console.log('Audiobook IDs:', response.data.map(book => book._id));
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const genres = [...new Set(books.map(book => book.genre))];

  const handleGenreChange = (e) => setGenre(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);

  const handleCreateNew = () => {
    navigate('/newbook');
  };

  const handleBookClick = (id) => {
    // console.log('Book ID:', id); // Log the ID
    if (id) {
      navigate(`/audiobook/${id}`);
    } else {
      console.error('No ID provided');
    }
  };

  const filterBooks = () => {
    return books.filter(
      (book) =>
        (genre ? book.genre === genre : true) &&
        (author ? book.author.toLowerCase().includes(author.toLowerCase()) : true)
    );
  };

  return (
    <div className='home-container'>
      <h1>Audio Books</h1>
      <div className='filter-container'>
        <label>
          Genre:
          <select value={genre} onChange={handleGenreChange}>
            <option value="">All Genres</option>
            {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
          </select>
        </label>
        <label>
          Author:
          <input
            type="text"
            placeholder="Filter by author"
            value={author}
            onChange={handleAuthorChange}
          />
        </label>
      </div>
      <div>
        <button onClick={handleCreateNew} className='new-book-button'>Create New Audio Book</button>
      </div>
      <div className="audiobooks-container">
        {filterBooks().map((book) => (
          <div
            key={book._id}
            className="audiobook"
            onClick={() => handleBookClick(book._id)}
          >
            <img src={book.coverImage || 'https://example.com/default-cover.jpg'} alt={book.title} />
            <div>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.description.slice(0, 100)}...</p>
              <p>Genre: {book.genre}</p>
            </div>
          </div>
        ))}
      </div><br/>
      <button onClick={handleCreateNew} className='new-book-button'>Create New Audio Book</button>
    </div>
  );
};

export default HomePage;
