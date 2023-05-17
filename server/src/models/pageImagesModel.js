const mongoose = require("mongoose");

let pageImageSchema = new mongoose.Schema({
    
          pageName: { type: String },
  
          imageUrl: { type: String },
  
          altText: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('PageImage', pageImageSchema);