const express = require('express');
const router = express.Router();
const audiobookController = require('../controllers/audiobookController');
const reviewController = require('../controllers/reviewController');

// Audiobook routes
router.post('/', audiobookController.addAudiobook);
router.get('/', audiobookController.getAllAudiobooks);
router.get('/:id', audiobookController.getAudiobookById);
router.delete('/:id', audiobookController.deleteAudiobook);
router.put('/:id', audiobookController.updateAudiobookById);

// Review routes
router.post('/:id/reviews', reviewController.addReview);
router.get('/:id/reviews', reviewController.getAllReviews);
router.delete('/:audiobookId/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;
