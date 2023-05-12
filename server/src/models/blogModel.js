const mongoose = require("mongoose");
const slugify = require('slugify');
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    authorId: {
      type: ObjectId,
      ref: "Author",
    },

    blogUID: {
      type: String,
    },

    blogViews: {
      type: Number,
    },

    blogTitle: {
      type: String,
      required: true,
    },

    coverImg: {
      type: String,
    },

    markdown: {
      type: String,
    },

    slug: {
      type: String,
      required: true,
      unique: true
    },

    description: {
      type: String,
      required: true,
    },

    sections: [],

    quote: {
      text: {
        type: String,
      },

      quoteAuthor: {
        type: String,
      },
    },

    blogFooter: {
      content: {
        type: String,
      },

      message: {
        type: String,
      },

      blogAuthor: {
        type: ObjectId,
        ref: "Author",
      },
    },

    tags: [{ type: String }],

    publishedAt: {
      type: Date,
      default: null,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    likes: {
      type: ObjectId,
      ref: "Like",
    },
  },

  { timestamps: true }
);

blogSchema.pre('validate', function(next){
  if (this.blogTitle) {
    let blog = this.blogTitle + " " + this.blogUID;
    this.slug = slugify(blog, { lower: true, strict: true })
  }

  next();
})

module.exports = mongoose.model("Blog", blogSchema);

/*
{
  title: {
        type: String
      },

      content: [{
        text: {
          type: String
        },

        image: {
          type: String
        }
      }]
    }
*/
