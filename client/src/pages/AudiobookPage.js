// src/pages/AudiobookPage.js
import React, { useState, useEffect  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackToHomeButton from '../components/BackToHomeButton';
import './AudiobookPage.css';
import axios from 'axios';

const AudiobookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [book, setBook] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  const server_url = "https://audiobook-review-and-rating-system-psrx.onrender.com";

  useEffect(() => {
    const fetchBookAndReviews = async () => {
      try {
        // Fetch the audiobook details
        const bookResponse = await axios.get(`${server_url}/audiobooks/${id}`);
        const bookData = bookResponse.data;
        setBook(bookData);
        // console.log('Book Details: ', bookData);
        // Fetch the reviews based on review IDs
        if (bookData.reviews && bookData.reviews.length > 0) {
          const reviewIds = bookData.reviews.map(review => review._id); // Get review IDs
          // console.log('Reviews Ids: ', reviewIds);
          const reviewsResponse = await axios.get(`${server_url}/audiobooks/${id}/reviews`, {
            params: {
              ids: reviewIds.join(',') // Send as a comma-separated string
            }
          });
          setReviews(reviewsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookAndReviews();
  }, [id]);

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      // console.log('Book ID:', id);
      // Delete the book from the backend
      await axios.delete(`${server_url}/audiobooks/${id}`);
      // Redirect to the homepage
      navigate('/');
    } catch (error) {
      console.error('Error deleting book:', error.response || error.message);
      alert('Failed to delete book. Please check the console for details.');
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  const handleEdit = () => {
    navigate(`/editbook/${id}`);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    // console.log('Book Id:', id);
    if (review.trim()) {
      try {
        const response = await axios.post(`${server_url}/audiobooks/${id}/reviews`, {
          description: review, // Use `description` to match the schema
          rating,
        });
        setReviews([response.data, ...reviews]);
        setReview('');
        setRating(null);
      } catch (error) {
        console.error('Error submitting review:', error.response ? error.response.data : error.message);
      }
    }
  };

  const handleDeleteReview = async (reviewId) => {
    // console.log('Book ID:', id);
    // console.log('Review ID:', reviewId);
    try {
      await axios.delete(`${server_url}/audiobooks/${id}/reviews/${reviewId}`);
      setReviews(reviews.filter(r => r._id !== reviewId));
    } catch (error) {
      console.error('Error deleting review:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="audiobook-detail">
      <BackToHomeButton />
      <h1>{book.title}</h1>
      <div className="audiobook-detail-container">
        <img src={book.coverImage} alt={book.title} className="cover-image" />
        <div className="details">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
        </div>
      </div>
      <div className="actions">
        <button onClick={handleEdit} className="edit-button">Edit</button>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
      {showConfirm && (
        <div className="confirm-popup">
          <div className="confirm-content">
            <p>Are you sure you want to delete this post?</p>
            <button onClick={confirmDelete} className="confirm-button">Yes</button>
            <button onClick={cancelDelete} className="cancel-button">No</button>
          </div>
        </div>
      )}
      <form onSubmit={handleReviewSubmit} className="review-form">
        <h2>Add Review</h2>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <div className="rating-group">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  value={value}
                  checked={rating === value}
                  onChange={() => setRating(value)}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="submit-review-button">Submit Review</button>
      </form><br/>

      <div className="reviews-section">
        <h2>Reviews</h2>
        {reviews.map((rev) => (
          <div key={rev._id} className="review-item">
            <div> 
              <p><strong>Rating:</strong> {rev.rating}</p>
              <p><strong>Review:</strong> {rev.description}</p>
            </div>
            <div> 
              <button className="delete-button-review" onClick={() => handleDeleteReview(rev._id)} >
                &#10060; {/* Unicode for the delete symbol */}
              </button>
            </div>
          </div>
        ))}
      </div>
      <BackToHomeButton />
    </div>
  );
};

export default AudiobookPage;
