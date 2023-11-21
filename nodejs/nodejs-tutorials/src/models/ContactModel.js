import mongoose from "mongoose";
const { Schema } = mongoose

const contactSchema = new Schema({
    name: {
        type: String,
        require : true,
        unique: true,
    },
    location: {
        type: String,
        require : true,
    },
    logo: {
        type: String,
        require : true,
    }
}, {
    timestamps: true
})

export const Contact = mongoose.model('Contact', contactSchema)