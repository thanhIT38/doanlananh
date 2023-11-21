import mongoose from "mongoose";
const { Schema } = mongoose

const noiquySchema = new Schema({
    name: {
        type: String,
        require : true,
        unique: true,
    },
    date: {
        type: String,
        require : true,
    },
    content: {
        type: String,
        require : true,
    }
}, {
    timestamps: true
})

export const Noiquy = mongoose.model('Noiquy', noiquySchema)