import { Tochuc } from "../models/TochucModel.js"
export const createTochucService = async ({ name, buukien, phone, image }) => {
    try {
      // Create a new Tochuc instance
      const newTochuc = new Tochuc({
        name,
        buukien,
        phone,
        image,
      });
  
      // Save the new Tochuc to the database
      const createdTochuc = await newTochuc.save();
  
      return {
        status: 'OK',
        data: {
          Tochuc: createdTochuc,
        },
      };
    } catch (error) {
      return {
        status: 'err',
        message: error.message || 'An error occurred during creation',
      };
    }
  };

export const getAllTochucService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allTochuc = await Tochuc.find()
            resolve({
                status: 'Ok',
                data: allTochuc
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


export const updateTochuc = (id, {name,buukien,phone,image}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTochuc = await Tochuc.findOne({
                _id: id
            })
            if (checkTochuc === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Tochuc is not defined'
                })
            }

            const updatedTochuc = await Tochuc.findByIdAndUpdate(id, {name,buukien,phone,image}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTochuc
            })
        } catch (e) {
            reject(e)
        }
    })
}



export const deleteTochucService = (_id) => {
    return new Promise(async (resolve, reject) => {
        try{
            const deleteTochuc = await Tochuc.findByIdAndDelete(_id)
            if(deleteTochuc){
                resolve({
                    status: 'OK',
                    data: deleteTochuc
                })
            }else {
                resolve({
                    status: 'err',
                    message: 'the Tochuc is not defied'
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