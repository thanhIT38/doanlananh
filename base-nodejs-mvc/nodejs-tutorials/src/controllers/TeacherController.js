import { createTeacherService, deleteTeacherService, getAllTeacherService, updateTeacher } from "../services/TeacherService.js";

export const createTeacherController = async (req, res) => {
    const { name, position, phoneNumber, selectedImage } = req.body;

if (name && position && phoneNumber && selectedImage) {
    const response = await createTeacherService({ name, chucvu: position, phone: phoneNumber, image: selectedImage });
    return res.json(response);

    } else {
        return res.json({
            status: 'err',
            message: "The name,chucvu,phone,image required"
        });
    }
};


export const getAllTeacherController = async (req, res) => {
    try {
        const response = await getAllTeacherService();
        return res.status(200).json({
            data: response,
            status: 'OK'
        });
    } catch (error) {
        console.error('Error in getAllTeacherController:', error);

        res.status(500).json({
            message: 'Internal Server Error',
            status: 'err',
            error: error.message || 'An unexpected error occurred'
        });
    }
};


export const updateTeacherController =async (req,res)=>{
    try {
        const {id} = req.params   
         const { name, position, phoneNumber, selectedImage } = req.body;

        if (!id) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The id is required'
            })
        }
        const response = await updateTeacher(id, { name, chucvu: position, phone: phoneNumber, image: selectedImage })
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


export const deleteTeacherController = async (req, res) => {
    try {
        const _id = req.params.id
        if(_id){
            const response = await deleteTeacherService(_id)
            return res.status(200).json(response)
        }else {
            return res.status(404).json({
                status: 'err',
                message: 'The TeacherId is required'
            })
        }
    } catch (error) {
        return res.status(404).json({
            status: 'err',
            message: error
        })
    }
}
