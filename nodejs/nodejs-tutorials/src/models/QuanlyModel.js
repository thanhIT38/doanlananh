import mongoose from "mongoose";
const { Schema } = mongoose

const quanlySchema = new Schema({
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

export const Quanly = mongoose.model('Quanly', quanlySchema)