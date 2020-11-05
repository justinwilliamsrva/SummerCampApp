const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const camperSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,
        },
        last_name: {
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
        counselor: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,

        },
        address: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,
        },
        camper_number: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,
        },
        parent_names: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,
        },
        parent_number: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,

        },
        parent_email: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,

        },
        age: {
            type: Number,
            required: true,

        },
        gender: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,

        },
        allergies: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true,

        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Camper", camperSchema);
