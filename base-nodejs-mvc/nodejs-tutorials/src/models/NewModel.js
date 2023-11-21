import mongoose from "mongoose";
const { Schema } = mongoose

const newSchema = new Schema({
    title: {
        type: String,
        require : true,
        unique: true,
    },
}, {
    timestamps: true
})

export const New = mongoose.model('New', newSchema)