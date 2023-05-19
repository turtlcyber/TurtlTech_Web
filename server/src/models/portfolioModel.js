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
    slug: {type: String, unique: true, required: true },
    tags: [{ type: String }],
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
