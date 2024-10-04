const express = require('express');
const { addNumber } = require('../controllers/averageController');

const router = express.Router();

// Route to add a number and get the running average
router.post('/add', addNumber);

module.exports = router;
