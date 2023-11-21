import {Hieutruong} from "../models/HieutruongModel.js"

export const createHieutruongService = async ({ name,chucvu,phone,image }) => {

    try {
            const data = await Hieutruong.create({
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


export const getAllHieutruongService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allHieutruong = await Hieutruong.find()
            resolve({
                status: 'Ok',
                data: allHieutruong
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


export const updateHieutruong = (id, {name,chucvu,phone,image}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHieutruong = await Hieutruong.findOne({
                _id: id
            })
            if (checkHieutruong === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Hieutruong is not defined'
                })
            }

            const updatedHieutruong = await Hieutruong.findByIdAndUpdate(id, {name,chucvu,phone,image}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHieutruong
            })
        } catch (e) {
            reject(e)
        }
    })
}



export const deleteHieutruongService = (_id) => {
    return new Promise(async (resolve, reject) => {
        try{
            const deleteHieutruong = await Hieutruong.findByIdAndDelete(_id)
            if(deleteHieutruong){
                resolve({
                    status: 'OK',
                    data: deleteHieutruong
                })
            }else {
                resolve({
                    status: 'err',
                    message: 'the Hieutruong is not defied'
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