const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const imageSchema = new mongoose.Schema({
    images: {
        type: String
    },

    // image2: {
    //     type: String
    // },

    // image3: {
    //     type: String
    // },

    // image4: {
    //     type: String
    // }

    img1Url: {
        type: String
    },

    img2Url: {
        type: String
    },

    img3Url: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Image', imageSchema);