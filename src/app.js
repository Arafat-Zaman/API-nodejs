const express = require('express');
const connectDB = require('./config/db');
const averageRoutes = require('./routes/averageRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Use the average routes
app.use('/api/average', averageRoutes);

module.exports = app;
