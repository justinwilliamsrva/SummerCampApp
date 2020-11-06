const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const equiptSchema = new mongoose.Schema(
    {
        item: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,
        },
        slug: {
            type: String,
            unique: true,
            index: true,
            lowercase: true,
        },
        location: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,
        },
        availability: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,
        },
        user: {
            type: String,
            default: "Admin",
        },
        notes: {
            type: String,
            trim: true,
            min: 3,
            max: 160,

        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Equipt", equiptSchema);
