import express from "express";
import { createNhanvienController, deleteNhanvienController, getAllNhanvienController, updateNhanvienController } from "../controllers/NhanvienController.js";

const router = express.Router()

router.get('/getAll', getAllNhanvienController)
router.put('/update/:id', updateNhanvienController)

router.post('/create', createNhanvienController)
router.delete('/delete/:id', deleteNhanvienController)

export default router