import { createContactService, deleteContactService, getAllContactService, updateContact } from "../services/ContactService.js";

export const createContactController = async (req, res) => {
    const { name, location, logo } = req.body;
  
if (name && location && logo) {
    const response = await createContactService({ name,  location, logo });
    return res.json(response);

    } else {
        return res.json({
            status: 'err',
            message: "The name,chucvu,phone,image required"
        });
    }
};


export const getAllContactController = async (req, res) => {
    try {
        const response = await getAllContactService();
        return res.status(200).json({
            data: response,
            status: 'OK'
        });
    } catch (error) {
        console.error('Error in getAllContactController:', error);

        res.status(500).json({
            message: 'Internal Server Error',
            status: 'err',
            error: error.message || 'An unexpected error occurred'
        });
    }
};


export const updateContactController =async (req,res)=>{
    try {
        const {id} = req.params   
        const { name,location,selectedImage } = req.body;
        console.log(name,location,selectedImage);
        if (!id) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The id is required'
            })
        }
        const response = await updateContact(id, { name,location,logo:selectedImage})
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


export const deleteContactController = async (req, res) => {
    try {
        const _id = req.params.id
        if(_id){
            const response = await deleteContactService(_id)
            return res.status(200).json(response)
        }else {
            return res.status(404).json({
                status: 'err',
                message: 'The ContactId is required'
            })
        }
    } catch (error) {
        return res.status(404).json({
            status: 'err',
            message: error
        })
    }
}
