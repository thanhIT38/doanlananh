import mongoose from "mongoose";
const { Schema } = mongoose

const hieutruongSchema = new Schema({
    name: {
        type: String,
        require : true,
        unique: true,
    },
    image: {
        type: String,
        require : true,
    },
    chucvu: {
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

export const Hieutruong = mongoose.model('Hieutruong', hieutruongSchema)