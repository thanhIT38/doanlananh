import { createNoiquyService, deleteNoiquyService, getAllNoiquyService, updateNoiquy } from "../services/NoiquyService.js";

export const createNoiquyController = async (req, res) => {
    const { name, selectedDate, selectedImage } = req.body;

if (name && selectedDate && selectedImage) {
    const response = await createNoiquyService({ name, date: selectedDate, content: selectedImage });
    return res.json(response);

    } else {
        return res.json({
            status: 'err',
            message: "The name,date,image required"
        });
    }
};


export const getAllNoiquyController = async (req, res) => {
    try {
        const response = await getAllNoiquyService();
        return res.status(200).json({
            data: response,
            status: 'OK'
        });
    } catch (error) {
        console.error('Error in getAllNoiquyController:', error);

        res.status(500).json({
            message: 'Internal Server Error',
            status: 'err',
            error: error.message || 'An unexpected error occurred'
        });
    }
};


export const updateNoiquyController =async (req,res)=>{
    try {
        const {id} = req.params   
         const { name, selectedDate, selectedImage } = req.body;

        if (!id) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The id is required'
            })
        }
        const response = await updateNoiquy(id, { name, date: selectedDate, content: selectedImage })
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


export const deleteNoiquyController = async (req, res) => {
    try {
        const _id = req.params.id
        if(_id){
            const response = await deleteNoiquyService(_id)
            return res.status(200).json(response)
        }else {
            return res.status(404).json({
                status: 'err',
                message: 'The NoiquyId is required'
            })
        }
    } catch (error) {
        return res.status(404).json({
            status: 'err',
            message: error
        })
    }
}
