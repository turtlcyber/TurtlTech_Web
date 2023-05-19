const mongoose = require("mongoose");
const slugify = require("slugify");
const ObjectId = mongoose.Schema.Types.ObjectId;

const portfolioSchema = new mongoose.Schema(
  {
    coverImage: {
      coverImgUrl: { type: String },

      coverImgAlt: { type: String },
    },

    title: { type: String },

    description: {
      type: String,
      required: true,
    },

    content: {
      type: String,
    },

    portfolioViews: {
      type: Number,
      default: 0
    },

    portfolioUID: {
      type: String,
    },

    portfolioField: {
      type: String,
    },

    categoryTitle: {
      type: String
    },

    slug: {type: String, unique: true, required: true },
    
    tags: [{ type: String }],

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

portfolioSchema.pre("validate", function (next) {
  if (this.title) {
    let str = this.title + " " + this.portfolioUID;
    this.slug = slugify(str, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
