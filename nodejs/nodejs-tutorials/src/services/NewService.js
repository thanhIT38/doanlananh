import { New } from "../models/NewModel.js"
import { NewPdf } from "../models/NewPdfModel.js";
export const createNewService = async ({ title }) => {
    try {
        if (title) {
            const isChecktitle = await New.find({ title });

            if (isChecktitle.length) {
                return {
                    status: 'err',
                    message: 'The title is already existed'
                };
            }

            const newNew = await New.create({
                title
            });

            return {
                status: 'OK',
                data: {
                    title: newNew.title
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
export const createNewPdfService = async ({ title,filepdf }) => {
    try {
        if (title) {
            const isChecktitle = await NewPdf.find({ title });

            if (isChecktitle.length) {
                return {
                    status: 'err',
                    message: 'The title is already existed'
                };
            }

            const newNew = await NewPdf.create({
                title,filepdf
            });

            return {
                status: 'OK',
                data: {
                    title: newNew.title,
                    filepdf:newNew.filepdf
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
export const getAllNewService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allNew = await New.find()
            resolve({
                status: 'Ok',
                data: allNew
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