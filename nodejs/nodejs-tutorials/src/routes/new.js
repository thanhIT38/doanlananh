import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createNewController, createNewPdfController } from "../controllers/newController.js";
import { getAllNewController } from "../controllers/newController.js";

const router = express.Router()


router.post('/create', createNewController)
router.post('/create-pdf', createNewPdfController)

router.get('/getAll', getAllNewController)
export default router