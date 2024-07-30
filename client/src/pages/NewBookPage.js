// src/pages/NewBookPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewBookPage.css';
import axios from 'axios';
import BackToHomeButton from '../components/BackToHomeButton';

const NewBookPage = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const server_url = "https://audiobook-review-and-rating-system-psrx.onrender.com";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Default cover image URL
    const defaultCoverImage = 'https://example.com/default-cover.jpg';

    try {
      await axios.post(`${server_url}/audiobooks`, {
        title,
        author,
        coverImage: coverImage || defaultCoverImage,
        description,
        genre,
        reviews: [] // Initialize with an empty reviews array
      });
      navigate('/');
    } catch (error) {
      console.error('Error creating new book:', error);
    }
  };

  return (
    <div className="new-book-form-container">
      <h1>Create New Audiobook</h1>
      <form onSubmit={handleSubmit} className="new-book-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text" id="title" value={title}
            onChange={(e) => setTitle(e.target.value)} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text" id="author" value={author}
            onChange={(e) => setAuthor(e.target.value)} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverImage">Cover Image (optional):</label>
          <input type="text" id="coverImage" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description" value={description}
            onChange={(e) => setDescription(e.target.value)} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text" id="genre" value={genre}
            onChange={(e) => setGenre(e.target.value)} required
          />
        </div>
        <button type="submit" className="submit-button">Add Audiobook</button>
      </form>
      <BackToHomeButton/>
    </div>
  );
};

export default NewBookPage;
