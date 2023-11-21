import mongoose from "mongoose";
const { Schema } = mongoose

const nhanvienSchema = new Schema({
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

export const Nhanvien = mongoose.model('Nhanvien', nhanvienSchema)