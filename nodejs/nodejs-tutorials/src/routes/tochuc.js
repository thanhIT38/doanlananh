import express from "express";
import { createTochucController, deleteTochucController, getAllTochucController, updateTochucController } from "../controllers/TochucController.js";
import { createHieutruongController, deleteHieutruongController, getAllHieutruongController, updateHieutruongController } from "../controllers/HieutruongController.js";

const router = express.Router()

router.get('/getAll', getAllHieutruongController)
router.put('/update/:id', updateHieutruongController)

router.post('/create', createHieutruongController)
router.delete('/delete/:id', deleteHieutruongController)

export default router