const mongoose = require("mongoose");

const turtlSEOSchema = new mongoose.Schema(
  {
    pageName: {
      type: String,
    },

    seoData: {
      pageTitle: {
        type: String,
      },
      pageDescription: {
        type: String,
      },
      pageKeywords: {
        type: String,
      },
      pageUrl: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
      siteName: {
        type: String,
      },
      altImageText: {
        type: String,
      },
      imageHight: {
        type: String,
      },
      imageWidth: {
        type: String,
      },
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("TurtlSEO", turtlSEOSchema);
