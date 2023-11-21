import {Nhanvien} from "../models/NhanvienModel.js"

export const createNhanvienService = async ({ name,chucvu,phone,image }) => {

    try {
            const data = await Nhanvien.create({
                name,chucvu,phone,image
            });

            return {
                status: 'OK',
                data: {
                    data
                }
            };

    } catch (error) {
        return {
            status: 'err',
            message: error.message || 'An error occurred during creation'
        };
    }
};


export const getAllNhanvienService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allNhanvien = await Nhanvien.find()
            resolve({
                status: 'Ok',
                data: allNhanvien
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


export const updateNhanvien = (id, {name,chucvu,phone,image}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNhanvien = await Nhanvien.findOne({
                _id: id
            })
            if (checkNhanvien === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Nhanvien is not defined'
                })
            }

            const updatedNhanvien = await Nhanvien.findByIdAndUpdate(id, {name,chucvu,phone,image}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedNhanvien
            })
        } catch (e) {
            reject(e)
        }
    })
}



export const deleteNhanvienService = (_id) => {
    return new Promise(async (resolve, reject) => {
        try{
            const deleteNhanvien = await Nhanvien.findByIdAndDelete(_id)
            if(deleteNhanvien){
                resolve({
                    status: 'OK',
                    data: deleteNhanvien
                })
            }else {
                resolve({
                    status: 'err',
                    message: 'the Nhanvien is not defied'
                })
            }
        }catch(e){
            reject({
                status: 'err',
                message: e
            })
        }
    })
}