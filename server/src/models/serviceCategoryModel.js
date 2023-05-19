const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const slugify = require('slugify');


const serviceCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },

    categoryIcon: {
        iconUrl: {
            type: String,
        },

        iconAlt: {
            type: String,
        }
    },

    description: {
        type: String
    },

    content: {
        type: String,
    },

    slug: {
        type: String,
        unique: true,
        required: true,
    },

    tags: [{
        type: String,
    }],

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
{ timestamps: true });

serviceCategorySchema.pre("validate", function (next) {
    if (this.title) {
      this.slug = slugify(this.title, { lower: true, strict: true });
    }
    next();
  });

module.exports = mongoose.model('ServiceCategory', serviceCategorySchema);