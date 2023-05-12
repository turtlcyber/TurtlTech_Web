const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const serviceSchema = new mongoose.Schema({

    content: {
        type: String,
    },

    // ImageFile: {
    //     type: String
    // },

    adminId: {
        type: ObjectId,
        ref: 'Admin'
    },

    imageUrl: {
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('Service', serviceSchema);