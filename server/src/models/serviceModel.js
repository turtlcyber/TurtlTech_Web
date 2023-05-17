const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const serviceSchema = new mongoose.Schema({

    title: {
        type: String,
    },

    description: {
        type: String,
    },

    imgUrl: {
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('Service', serviceSchema);