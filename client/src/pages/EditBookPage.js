// src/pages/EditBookPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditBookPage.css';
import BackToHomeButton from '../components/BackToHomeButton';
import axios from 'axios';

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const server_url = "https://audiobook-review-and-rating-system-psrx.onrender.com";

  // const book = [...newBooks, ...defaultBooks ].find((book) => book.id === Number(id));
  // const [book, setBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${server_url}/audiobooks/${id}`);
        const fetchedBook = response.data;
        setTitle(fetchedBook.title);
        setAuthor(fetchedBook.author);
        setDescription(fetchedBook.description);
        setGenre(fetchedBook.genre);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBook();
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update the book information here
    const updatedBook = {
      title,
      author,
      description,
      genre,
    };
    try {
      await axios.put(`${server_url}/audiobooks/${id}`, updatedBook);
      navigate(`/audiobook/${id}`);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="edit-book-container">
      <h1>Edit Audio Book</h1>
      <form className="edit-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
      <BackToHomeButton />
    </div>
  );
};

export default EditBookPage;
