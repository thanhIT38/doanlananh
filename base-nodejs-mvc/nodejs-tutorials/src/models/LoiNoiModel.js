import mongoose from "mongoose";
const { Schema } = mongoose

const loinoiSchema = new Schema({
    content: {
        type: String,
        require : true,
        unique: true,
    },
}, {
    timestamps: true
})

export const Loinoi = mongoose.model('Loinoi', loinoiSchema)