const mongoose = require("mongoose");

let testimonialSchema = new mongoose.Schema({
    name: { type: String},
    designation: { type: String },
    story: { type: String },
    rating: { type: Number },
    image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);