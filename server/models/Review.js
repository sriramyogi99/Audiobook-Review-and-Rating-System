const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  description: {
    type: String, required: true
  },
  rating: {
    type: Number, min: 1, max: 5, required: true
  },
  createdAt: {
    type: Date, default: Date.now
  },
  audiobook: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Audiobook', required: true
  }
});

module.exports = mongoose.model('Review', reviewSchema);
