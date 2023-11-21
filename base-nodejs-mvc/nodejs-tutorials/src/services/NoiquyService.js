import {Noiquy} from "../models/NoiquyModel.js"

export const createNoiquyService = async ({ name,date,content }) => {

    try {
            const data = await Noiquy.create({
                name,date,content
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


export const getAllNoiquyService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allNoiquy = await Noiquy.find()
            resolve({
                status: 'Ok',
                data: allNoiquy
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


export const updateNoiquy = (id, {name,date,content}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNoiquy = await Noiquy.findOne({
                _id: id
            })
            if (checkNoiquy === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Noiquy is not defined'
                })
            }

            const updatedNoiquy = await Noiquy.findByIdAndUpdate(id, {name,date,content}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedNoiquy
            })
        } catch (e) {
            reject(e)
        }
    })
}



export const deleteNoiquyService = (_id) => {
    return new Promise(async (resolve, reject) => {
        try{
            const deleteNoiquy = await Noiquy.findByIdAndDelete(_id)
            if(deleteNoiquy){
                resolve({
                    status: 'OK',
                    data: deleteNoiquy
                })
            }else {
                resolve({
                    status: 'err',
                    message: 'the Noiquy is not defied'
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