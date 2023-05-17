const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const imageSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },

    imgField: {
      type: String,
      enum: ["BLOG", "HOME", "SERVICES", "ABOUT", "CONTACT"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);
