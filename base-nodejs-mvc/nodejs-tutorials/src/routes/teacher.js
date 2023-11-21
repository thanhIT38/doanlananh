import express from "express";
import { createTeacherController, deleteTeacherController, getAllTeacherController, updateTeacherController } from "../controllers/TeacherController.js";

const router = express.Router()

router.get('/getAll', getAllTeacherController)
router.put('/update/:id', updateTeacherController)

router.post('/create', createTeacherController)
router.delete('/delete/:id', deleteTeacherController)

export default router