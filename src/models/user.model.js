import mongoose, { Schema, model } from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],

    },
    avatar: {
        type: String,
        required: [true, "Avatar is required"],
    },
    coverImage: {
        type: String,

    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"

        }
    ],

    refreshToken: {
        type: String
    }



}, { timestamps: true })


export const User = mongoose.model("User", userSchema)