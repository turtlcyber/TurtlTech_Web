const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

let userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            trim: true
        },

        mobile: {
            type: Number,
            required: true,
            trim: true
        },

        adminId:{
            type: ObjectId,
            ref: 'Admin'
        },

        role: {
            type: String,
            required: true,
            trim: true
        },

        authority: {
            type: [String]
        },

        joiningDate: {
            type: Date
        },

        deletedAt: { type: Date, default: null },
        
        isDeleted: { type: Boolean, default: false },

    }, { timestamps: true })

module.exports = mongoose.model("User", userSchema);