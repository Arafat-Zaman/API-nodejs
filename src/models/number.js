const mongoose = require('mongoose');

const numberSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Number', numberSchema);
