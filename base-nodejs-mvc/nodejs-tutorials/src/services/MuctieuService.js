import { Muctieu } from "../models/MuctieuModel.js";

export const createMuctieuService = async ({ content }) => {
    try {
        if (content) {
            const isCheckcontent = await Muctieu.find({ content });

            if (isCheckcontent.length) {
                return {
                    status: 'err',
                    message: 'The content already exists'
                };
            }

            // Move the Muctieu variable declaration here
            const newMuctieu = await Muctieu.create({
                content
            });

            return {
                status: 'OK',
                data: {
                    content: newMuctieu.content
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

export const getAllMuctieuService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allMuctieu = await Muctieu.find()
            resolve({
                status: 'Ok',
                data: allMuctieu
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


// export const deleteAllMuctieuService = (ids) => {
//     return new Promise(async (resolve, reject) => {
//         try{
//             const deleteMuctieus = await Muctieu.deleteMany({_id: ids})
//             resolve({
//                 status: 'Ok',
//                 data: deleteMuctieus
//             })
//         }catch(e){
//             console.log(e)
//             reject({
//                 status:'err',
//                 message:e
//             })
//         }
//     })
// }

// export const updateMuctieu = (id, content) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const checkMuctieu = await Muctieu.findOne({
//                 _id: id
//             })
//             if (checkMuctieu === null) {
//                 resolve({
//                     status: 'ERR',
//                     message: 'The Muctieu is not defined'
//                 })
//             }

//             const updatedMuctieu = await Muctieu.findByIdAndUpdate(id, {content}, { new: true })
//             resolve({
//                 status: 'OK',
//                 message: 'SUCCESS',
//                 data: updatedMuctieu
//             })
//         } catch (e) {
//             reject(e)
//         }
//     })
// }