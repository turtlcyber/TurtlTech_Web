const mongoose = require("mongoose");

let turtlInfoSchema = new mongoose.Schema(
  {
    serviceEmail: { type: String, unique: true },

    address: { type: String },

    contactNumber: [{ type: String }],

    socialMediaLinks: [
      {
        types: {
          type: String,
        },

        url: {
          type: String,
        },
      },
    ],

    subsidiaryAddress: [{
      city: {
        type: String,
      },

      state: {
        type: String
      },

      country: {
        type: String
      },

      address: {
        type: String
      }
    }],

    googleMap: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TurtlInfo", turtlInfoSchema);
