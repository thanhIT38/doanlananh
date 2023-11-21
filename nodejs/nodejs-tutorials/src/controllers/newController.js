
import { 
    createNewPdfService,
    createNewService, getAllNewService
} from '../services/NewService.js'
export const createNewController = async (req, res) => {
    const { title } = req.body;
    if (title) {
        const response = await createNewService({ title });
        return res.json(response);
    } else {
        return res.json({
            status: 'err',
            message: "The title required"
        });
    }
};
export const createNewPdfController = async (req, res) => {
    const {filepdf} = req.body;
    const title = req.body.titlePdf;
    console.log(title);
    if (title && filepdf) {
        const response = await createNewPdfService({ title,filepdf });
        return res.json(response);
    } else {
        return res.json({
            status: 'err',
            message: "The title required"
        });
    }
};


export const getAllNewController = async (req, res) => {
    try {
        const response = await getAllNewService();
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

