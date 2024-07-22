// seed.js
const mongoose = require('mongoose');
const Audiobook = require('./models/Audiobook');
const Review = require('./models/Review');
const initialAudiobooks = require('./audiobookData');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');

  // Clear existing data
  await Audiobook.deleteMany({});
  await Review.deleteMany({});

  // Seed initial data
  for (const bookData of initialAudiobooks) {
    const { reviews, ...audiobookData } = bookData;
    
    // Create the audiobook first to get its ID
    const audiobook = new Audiobook(audiobookData);
    await audiobook.save();

    // Create the reviews with a reference to the audiobook
    const createdReviews = await Review.insertMany(reviews.map(review => ({
      ...review,
      audiobook: audiobook._id
    })));

    // Save review IDs in the audiobook
    audiobook.reviews = createdReviews.map(review => review._id);
    await audiobook.save();
  }

  console.log('Seed data created');
  mongoose.disconnect();
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});
