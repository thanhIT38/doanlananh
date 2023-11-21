import { Loinoi } from "../models/LoiNoiModel.js";

export const createLoiNoiService = async ({ content }) => {
    try {
        if (content) {
            const isCheckcontent = await Loinoi.find({ content });

            if (isCheckcontent.length) {
                return {
                    status: 'err',
                    message: 'The content is already existed'
                };
            }

            const LoiNoi = await Loinoi.create({
                content
            });

            return {
                status: 'OK',
                data: {
                    content: LoiNoi.content
                }
            };
        }
    } catch (error) {
        return {
            status: 'err',
            message: error.message || 'An error occurred during creation'
        };
    }
};
export const getAllLoiNoiService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allLoiNoi = await Loinoi.find()
            resolve({
                status: 'Ok',
                data: allLoiNoi
            })
        }catch(e){
            console.log(e)
            reject({
                status:'err',
                message:e
            })
        }
    })
}


export const deleteAllLoiNoiService = (ids) => {
    return new Promise(async (resolve, reject) => {
        try{
            const deleteLoiNois = await Loinoi.deleteMany({_id: ids})
            resolve({
                status: 'Ok',
                data: deleteLoiNois
            })
        }catch(e){
            console.log(e)
            reject({
                status:'err',
                message:e
            })
        }
    })
}

export const updateLoinoi = (id, content) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoinoi = await Loinoi.findOne({
                _id: id
            })
            if (checkLoinoi === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Loinoi is not defined'
                })
            }

            const updatedLoinoi = await Loinoi.findByIdAndUpdate(id, {content}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoinoi
            })
        } catch (e) {
            reject(e)
        }
    })
}