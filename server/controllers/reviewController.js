const Review = require('../models/Review');  // Import the Review model
const Audiobook = require('../models/Audiobook');  // Import the Audiobook model

// add a new review to a audiobook
exports.addReview = async (req, res) => {
  try {
    const { description, rating } = req.body;
    
    // Find the audiobook to add the review
    const audiobook = await Audiobook.findById(req.params.id);
    if (!audiobook) {
      return res.status(404).send({ message: 'Audiobook not found' });
    }

    // Create a new review
    const newReview = new Review({
      description,
      rating,
      audiobook: audiobook._id // Associate the review with the audiobook
    });

    // Save the review to the database
    const savedReview = await newReview.save();

    // Add the review ID to the audiobook's reviews array
    audiobook.reviews.push(savedReview._id);
    await audiobook.save();

    // Send the newly created review back in the response
    res.status(201).send(savedReview);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(400).send({ message: 'Error adding review', error });
  }
};

// get all reviews of a audiobook
exports.getAllReviews = async (req, res) => {
  try {
    // Fetch the audiobook to get the list of review IDs
    const audiobook = await Audiobook.findById(req.params.id);
    if (!audiobook) {
      return res.status(404).json({ message: 'Audiobook not found' });
    }

    // Fetch the reviews using the review IDs from the audiobook document
    const reviews = await Review.find({ _id: { $in: audiobook.reviews } })
      .sort({ createdAt: -1 }); // Sort reviews by createdAt in descending order

    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// delete a review of a audiobook by ID
exports.deleteReview = async (req, res) => {
  try {
    const { audiobookId, reviewId } = req.params;

    // Find the audiobook by ID
    const audiobook = await Audiobook.findById(audiobookId);
    if (!audiobook) {
      return res.status(404).send({ message: 'Audiobook not found' });
    }

    // Find the review by ID and remove it from the audiobook's reviews array
    const reviewIndex = audiobook.reviews.indexOf(reviewId);
    if (reviewIndex === -1) {
      return res.status(404).send({ message: 'Review not found in the audiobook' });
    }

    audiobook.reviews.splice(reviewIndex, 1); // Remove the review from the array
    await audiobook.save(); // Save the changes to the audiobook

    // Delete the review from the Review collection
    await Review.findByIdAndDelete(reviewId);

    res.status(200).send({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).send({ message: 'Error deleting review', error });
  }
};
