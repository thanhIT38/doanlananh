import { 
    createLoiNoiService, deleteAllLoiNoiService, getAllLoiNoiService, updateLoinoi
} from '../services/LoiNoiService.js'
import { createMuctieuService, getAllMuctieuService } from '../services/MuctieuService.js';

export const createMuctieuController = async (req, res) => {
    const { content } = req.body;console.log(content);
    if (content) {
        const response = await createMuctieuService({ content });
        return res.json(response);
    } else {
        return res.json({
            status: 'err',
            message: "The content required"
        });
    }
};


export const getAllMuctieuController = async (req, res) => {
    try {
        const response = await getAllMuctieuService();
        return res.status(200).json({
            data: response,
            status: 'OK'
        });
    } catch (error) {
        console.error('Error in getAllNewController:', error);

        res.status(500).json({
            message: 'Internal Server Error',
            status: 'err',
            error: error.message || 'An unexpected error occurred'
        });
    }
};

export const deleteLoiNoiController = async (req, res) => {
    try {
        const _id = req.params.id
        if(_id){
            const response = await deleteAllLoiNoiService(_id)
            return res.status(200).json(response)
        }else {
            return res.status(404).json({
                status: 'err',
                message: 'The id is required'
            })
        }
    } catch (error) {
        return res.status(404).json({
            status: 'err',
            message: error
        })
    }
}

export const updateLoiNoiController =async (req,res)=>{
    try {
        const {id} = req.params
        const {content} = req.body
        if (!id) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The id is required'
            })
        }
        const response = await updateLoinoi(id, content)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}