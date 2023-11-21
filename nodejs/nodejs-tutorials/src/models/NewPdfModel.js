import mongoose from "mongoose";
const { Schema } = mongoose

const newPdfSchema = new Schema({
    title: {
        type: String,
        require : true,
        unique: true,
    },
    filepdf: {
        type: String,
        require : true,
    },
}, {
    timestamps: true
})

export const NewPdf = mongoose.model('NewPdf', newPdfSchema)