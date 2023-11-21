import {Teacher} from "../models/TeacherModel.js"

export const createTeacherService = async ({ name,chucvu,phone,image }) => {

    try {
            const data = await Teacher.create({
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


export const getAllTeacherService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allTeacher = await Teacher.find()
            resolve({
                status: 'Ok',
                data: allTeacher
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


export const updateTeacher = (id, {name,chucvu,phone,image}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTeacher = await Teacher.findOne({
                _id: id
            })
            if (checkTeacher === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Teacher is not defined'
                })
            }

            const updatedTeacher = await Teacher.findByIdAndUpdate(id, {name,chucvu,phone,image}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTeacher
            })
        } catch (e) {
            reject(e)
        }
    })
}



export const deleteTeacherService = (_id) => {
    return new Promise(async (resolve, reject) => {
        try{
            const deleteTeacher = await Teacher.findByIdAndDelete(_id)
            if(deleteTeacher){
                resolve({
                    status: 'OK',
                    data: deleteTeacher
                })
            }else {
                resolve({
                    status: 'err',
                    message: 'the Teacher is not defied'
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