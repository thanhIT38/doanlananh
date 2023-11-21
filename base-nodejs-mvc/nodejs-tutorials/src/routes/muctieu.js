import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createLoiNoiController,deleteLoiNoiController,getAllLoiNoiController, updateLoiNoiController } from "../controllers/LoiNoiController.js"
import { createMuctieuController, getAllMuctieuController } from "../controllers/MuctieuController.js";
const router = express.Router()

// router.put('/update/:id', updateMuctieuController)

router.post('/create', createMuctieuController)
// router.post('/create-pdf', createNewPdfController)

// router.delete('/delete/:id', deleteMuctieuController)
router.get('/getAll', getAllMuctieuController)
export default router