const mongoose = require("mongoose");

let adminSchema = new mongoose.Schema(
    {
        userKey: {
            type: String,

        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        
        password: {
            type: String,
            min: 8,
            max: 15,
            required: true
        },

        role: {
            type: String,
            required: true,
            trim: true
        },

        // homePageImages: {
        //     type: String,
        // },

        // products: {
        //     type: [String]
        // },

        // testimonials: {
        //     type: String
        // },

        // certificates: {
        //     type: String
        // },

        // partnerships: {
        //     type: String
        // },

        // awardsAndRecognitions: {
        //     type: String
        // }

    }, { timestamps: true })

module.exports = mongoose.model("Admin", adminSchema);