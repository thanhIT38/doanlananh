import express from "express";
import { createContactController, deleteContactController, getAllContactController, updateContactController } from "../controllers/ContactController.js";

const router = express.Router()

router.get('/getAll', getAllContactController)
router.put('/update/:id', updateContactController)

router.post('/create', createContactController)
router.delete('/delete/:id', deleteContactController)

export default router