import { Router } from "express";
import { getTasksHandler, getTaskByIdHandler, createTaskHandler, deleteTaskHandler, completeTaskHandler } from "../controllers/tasks.controller.js";

const router = Router()

router.get('/tasks', getTasksHandler)
router.get('/tasks/:id', getTaskByIdHandler)
router.post('/tasks', createTaskHandler)
router.delete('/tasks/:id', deleteTaskHandler)
router.put('/tasks/:id', completeTaskHandler)

export { router }

/*

app.get('/tasks', (req, res) => {
    getTasksHandler(req, res)
})

app.get('/tasks/:id', (req, res) => {
    getTaskByIdHandler(req, res)
})


app.post('/tasks', (req, res) => {
    createTaskHandler(req, res)
})

app.delete('/tasks/:id', (req, res) => {
    deleteTaskHandler(req, res)
})

app.put('/tasks/:id', (req, res) => {
    completeTaskHandler(req, res)
})

*/