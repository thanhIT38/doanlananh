import { createTochucService, deleteTochucService, getAllTochucService, updateTochuc } from "../services/TochucService.js";

export const createTochucController = async (req, res) => {
    const { chairmanName, parcel, phoneNumber } = req.body;
    const {selectedImage} =req.body
if (chairmanName && parcel && phoneNumber && selectedImage) {
    const response = await createTochucService({ name:chairmanName,  buukien:parcel, phone: phoneNumber, image: selectedImage });
    return res.json(response);

    } else {
        return res.json({
            status: 'err',
            message: "The name,chucvu,phone,image required"
        });
    }
};


export const getAllTochucController = async (req, res) => {
    try {
        const response = await getAllTochucService();
        return res.status(200).json({
            data: response,
            status: 'OK'
        });
    } catch (error) {
        console.error('Error in getAllTochucController:', error);

        res.status(500).json({
            message: 'Internal Server Error',
            status: 'err',
            error: error.message || 'An unexpected error occurred'
        });
    }
};


export const updateTochucController =async (req,res)=>{
    try {
        const {id} = req.params   
        const { chairmanName, parcel, phoneNumber,selectedImage } = req.body.content;

        if (!id) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The id is required'
            })
        }
        const response = await updateTochuc(id, { name:chairmanName,  buukien:parcel, phone: phoneNumber, image: selectedImage })
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


export const deleteTochucController = async (req, res) => {
    try {
        const _id = req.params.id
        if(_id){
            const response = await deleteTochucService(_id)
            return res.status(200).json(response)
        }else {
            return res.status(404).json({
                status: 'err',
                message: 'The TochucId is required'
            })
        }
    } catch (error) {
        return res.status(404).json({
            status: 'err',
            message: error
        })
    }
}
