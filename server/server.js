const express = require('express');
const cors = require('cors'); // Import the cors package
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const audiobookRoutes = require('./routes/audiobooks');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/audiobooks', audiobookRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
