import { getAllTasks, getTaskById, addTask, completeTask, deleteTask } from '../services/task.service.js'
import { isIdValid, isTitleValid } from '../validators/task.validator.js'

function getTasksHandler(req, res) {
    return res.status(200).json(getAllTasks())
}

function getTaskByIdHandler(req, res) {
    const id = Number(req.params.id)

    if (!isIdValid(id)) {
        return res.status(400).json({ message: 'ID inválido' })
    }

    const task = getTaskById(id)

    if (task) {
        return res.status(200).json(task)
    }

    return res.status(404).json({ message: 'Tarea no encontrada' })
}

function createTaskHandler(req, res) {
    const title = req.body.title

    if (!isTitleValid(title)) {
        return res.status(400).json({ message: 'Datos Invalidos' })
    }

    const newTask = addTask(title)

    return res.status(201).json(newTask)
}

/*
function createTaskHandler(req, res) {
    const { id, title } = req.body

    if (!isIdValid(id) || !isTitleValid(title)) {
        return res.status(400).json({ message: 'Datos inválidos' })
    }

    const existingTask = getTaskById(id)

    if (existingTask) {
        return res.status(409).json({ message: 'ID ya existe' })
    }

    const newTask = addTask({ id, title, completed: false })

    return res.status(201).json(newTask)
}
*/

function deleteTaskHandler(req, res) {
    const id = Number(req.params.id)

    if (!isIdValid(id)) {
        return res.status(400).json({ message: 'ID invalido' })
    }

    const task = getTaskById(id)

    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    const taskToDelete = deleteTask(id)
    return res.status(200).json(taskToDelete)
}

function completeTaskHandler(req, res) {
    const id = Number(req.params.id)
    if (!isIdValid(id)) {
        return res.status(400).json({ message: 'ID invalido' })
    }

    const task = getTaskById(id)
    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    const updatedTask = completeTask(id)

    return res.status(200).json(updatedTask)
}

export {
    getTasksHandler,
    getTaskByIdHandler,
    createTaskHandler,
    deleteTaskHandler,
    completeTaskHandler
}