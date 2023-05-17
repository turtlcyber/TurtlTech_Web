const mongoose = require("mongoose");

let portfolioSchema = new mongoose.Schema({
    image: {
        imageUrl: { type: String },
        
        altText: { type: String },
      },

    title: { type: String },
  
    description: {
        type: String,
        required: true,
      },
  
    sections: [],

    portfolioField: { type: String }

}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);