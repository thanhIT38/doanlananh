import { Contact } from "../models/ContactModel.js";

export const createContactService = async ({ name,location,logo }) => {
    try {
      // Create a new Contact instance
      const newContact = new Contact({
        name,location,logo
      });
  
      // Save the new Contact to the database
      const createdContact = await newContact.save();
  
      return {
        status: 'OK',
        data: {
          Contact: createdContact,
        },
      };
    } catch (error) {
      return {
        status: 'err',
        message: error.message || 'An error occurred during creation',
      };
    }
  };

export const getAllContactService =async()=>{
    return new Promise(async (resolve, reject) => {
        try{
            const allContact = await Contact.find()
            resolve({
                status: 'Ok',
                data: allContact
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


export const updateContact = (id, {name,location,logo}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkContact = await Contact.findOne({
                _id: id
            })
            if (checkContact === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Contact is not defined'
                })
            }

            const updatedContact = await Contact.findByIdAndUpdate(id, {name,location,logo}, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedContact
            })
        } catch (e) {
            reject(e)
        }
    })
}



export const deleteContactService = (_id) => {
    return new Promise(async (resolve, reject) => {
        try{
            const deleteContact = await Contact.findByIdAndDelete(_id)
            if(deleteContact){
                resolve({
                    status: 'OK',
                    data: deleteContact
                })
            }else {
                resolve({
                    status: 'err',
                    message: 'the Contact is not defied'
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