const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const disLikeSchema = new mongoose.Schema({
    
    blogId: {
        type: ObjectId,
        ref: 'Blog'
    },

    dislike: {
        type: Number,
        default: 0,
        required: true
    },

    love: {
        type: Number,
        default: 0,
        required: true
    },

    haha: {
        type: Number,
        default: 0,
        required: true
    },

    wow: {
        type: Number,
        default: 0,
        required: true
    },

    angry: {
        type: Number,
        default: 0,
        required: true
    },

    fire: {
        type: Number,
        default: 0,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('disLikeSchema', disLikeSchema);