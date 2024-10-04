const Number = require('../models/number');

// Add a number and return the running average
exports.addNumber = async (req, res) => {
    try {
        const { value } = req.body;
        if (!value || typeof value !== 'number') {
            return res.status(400).json({ message: 'Invalid number' });
        }

        // Create and save the new number
        const number = new Number({ value });
        await number.save();

        // Calculate the running average
        const numbers = await Number.find();
        const total = numbers.reduce((sum, num) => sum + num.value, 0);
        const average = total / numbers.length;

        res.status(201).json({
            message: 'Number added successfully',
            average: average,
            totalNumbers: numbers.length
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
