const mongoose = require('mongoose');
const Audiobook = require('./models/Audiobook');
const Review = require('./models/Review');

const migrateReviews = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Fetch all audiobooks
    const audiobooks = await Audiobook.find();
    
    for (const audiobook of audiobooks) {
      if (audiobook.reviews && audiobook.reviews.length > 0) {
        const reviewIds = [];
        
        for (const reviewData of audiobook.reviews) {
          // Create a new review document
          const newReview = new Review({
            description: reviewData.description,
            rating: reviewData.rating,
            createdAt: reviewData.createdAt,
            audiobook: audiobook._id, // Add reference to audiobook
          });
          
          // Save the review and get the ID
          const savedReview = await newReview.save();
          reviewIds.push(savedReview._id);
        }
        
        // Update the audiobook to reference the reviews by their IDs
        audiobook.reviews = reviewIds;
        await audiobook.save();
      }
    }
    
    console.log('Reviews successfully migrated!');
  } catch (error) {
    console.error('Error migrating reviews:', error);
  } finally {
    mongoose.connection.close();
  }
};

migrateReviews();
