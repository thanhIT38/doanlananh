import mongoose from "mongoose";
const { Schema } = mongoose

const tochucSchema = new Schema({
    name: {
        type: String,
        require : true,
        unique: true,
    },
    image: {
        type: String,
        require : true,
    },
    buukien: {
        type: String,
        require : true,
    },
    phone: {
        type: String,
        require : true,
    },
}, {
    timestamps: true
})

export const Tochuc = mongoose.model('Tochuc', tochucSchema)