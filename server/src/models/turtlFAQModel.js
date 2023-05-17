const mongoose = require('mongoose');

const turtlFAQSchema = new mongoose.Schema({
    category: {
        type: String,
    },

    question: {
        type: String,
    },

    answer: {
        type: String,
    }
}, { timestamps: true });


module.exports = mongoose.model('FAQ', turtlFAQSchema);