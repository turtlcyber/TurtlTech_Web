const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const visitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
    },

    sub: {
        type: String,
    },

    picture: {
        type: String,
    }
});

module.exports = mongoose.model('Visitor', visitorSchema)