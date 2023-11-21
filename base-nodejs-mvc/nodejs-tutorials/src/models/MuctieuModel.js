import mongoose from "mongoose";
const { Schema } = mongoose

const muctieuSchema = new Schema({
    content: {
        type: String,
        require : true,
        unique: true,
    },
}, {
    timestamps: true
})

export const Muctieu = mongoose.model('Muctieu', muctieuSchema)