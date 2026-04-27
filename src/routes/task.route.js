import { Router } from "express";
import { getTasksHandler, getTaskByIdHandler, createTaskHandler, deleteTaskHandler, completeTaskHandler } from "../controllers/task.controller.js";

const router = Router()

router.get('/tasks', getTasksHandler)
router.get('/tasks/:id', getTaskByIdHandler)
router.post('/tasks', createTaskHandler)
router.delete('/tasks/:id', deleteTaskHandler)
router.put('/tasks/:id', completeTaskHandler)

export default router;