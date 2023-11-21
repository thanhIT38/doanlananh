import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createLoiNoiController,deleteLoiNoiController,getAllLoiNoiController, updateLoiNoiController } from "../controllers/LoiNoiController.js"
const router = express.Router()

router.put('/update/:id', updateLoiNoiController)

router.post('/create', createLoiNoiController)
// router.post('/create-pdf', createNewPdfController)

router.delete('/delete/:id', deleteLoiNoiController)
router.get('/getAll', getAllLoiNoiController)
export default router