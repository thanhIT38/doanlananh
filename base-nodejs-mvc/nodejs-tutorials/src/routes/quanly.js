import express from "express";
import { createQuanlyController, deleteQuanlyController, getAllQuanlyController, updateQuanlyController } from "../controllers/QuanlyController.js";

const router = express.Router()

router.get('/getAll', getAllQuanlyController)
router.put('/update/:id', updateQuanlyController)

router.post('/create', createQuanlyController)
router.delete('/delete/:id', deleteQuanlyController)

export default router