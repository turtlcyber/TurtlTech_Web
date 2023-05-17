const mongoose = require("mongoose");

let eventSchema = new mongoose.Schema({
    title: { type: String },
    images: [{ type: String }],
    story: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);