import express from "express";
import { createNoiquyController, deleteNoiquyController, getAllNoiquyController, updateNoiquyController } from "../controllers/NoiquyController.js";

const router = express.Router()

router.get('/getAll', getAllNoiquyController)
router.put('/update/:id', updateNoiquyController)

router.post('/create', createNoiquyController)
router.delete('/delete/:id', deleteNoiquyController)

export default router