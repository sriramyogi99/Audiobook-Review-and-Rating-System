const mongoose = require('mongoose');
const Review = require('./Review'); // Ensure correct path to Review model

const audiobookSchema = new mongoose.Schema({
  title: {
    type: String, required: true
  },
  author: {
    type: String, required: true
  },
  coverImage: {
    type: String, // URL to the cover image
    default: 'default_cover_image_url' // Replace with your default image URL
  },
  description: {
    type: String, required: true
  },
  genre: {
    type: String, required: true
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Review'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Audiobook', audiobookSchema);
