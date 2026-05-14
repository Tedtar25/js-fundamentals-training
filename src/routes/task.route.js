import { Router } from "express";
import { getTasksHandler, getTaskByIdHandler, createTaskHandler, deleteTaskHandler, completeTaskHandler } from "../controllers/task.controller.js";
import { idMiddleware } from "../middlewares/id.middleware.js";

const router = Router()

router.get('/tasks', getTasksHandler)
router.get('/tasks/:id', idMiddleware, getTaskByIdHandler)
router.post('/tasks', createTaskHandler)
router.delete('/tasks/:id', idMiddleware, deleteTaskHandler)
router.put('/tasks/:id', idMiddleware, completeTaskHandler)

export default router;