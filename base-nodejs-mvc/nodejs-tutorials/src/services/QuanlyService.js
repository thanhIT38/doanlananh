import { Quanly } from "../models/QuanlyModel.js"
export const createQuanlyService = async ({ name,chucvu,phone,image }) => {
    try {
            const QuanlyQuanly = await Quanly.create({
                name,chucvu,phone,image
            });

            return {
                status: 'OK',
                data: {
                    QuanlyQuanly
                }
            };

    } catch (error) {
        return {
            status: 'err',
            message: error.message || 'An error occurred during creation'
        };
    }
};


export const getAllQuanlyService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allQuanly = await Quanly.find()
            resolve({
                status: 'Ok',
                data: allQuanly
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


export const updateQuanly = (id, {name,chucvu,phone,image}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuanly = await Quanly.findOne({
                _id: id
            })
            if (checkQuanly === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Quanly is not defined'
                })
            }

            const updatedQuanly = await Quanly.findByIdAndUpdate(id, {name,chucvu,phone,image}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuanly
            })
        } catch (e) {
            reject(e)
        }
    })
}



export const deleteQuanlyService = (_id) => {
    return new Promise(async (resolve, reject) => {
        try{
            const deleteQuanly = await Quanly.findByIdAndDelete(_id)
            if(deleteQuanly){
                resolve({
                    status: 'OK',
                    data: deleteQuanly
                })
            }else {
                resolve({
                    status: 'err',
                    message: 'the Quanly is not defied'
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