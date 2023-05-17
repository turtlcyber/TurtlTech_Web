const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
    },

    mobile: {
        type: String,
    },

    subject: {
        type: String
    },

    text: {
        type: String
    }
},
{ timestamps: true });

module.exports = mongoose.model('Contactus', contactUsSchema);