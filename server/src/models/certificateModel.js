const mongoose = require("mongoose");

let certificateSchema = new mongoose.Schema({
    title: { type: String },
    image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);