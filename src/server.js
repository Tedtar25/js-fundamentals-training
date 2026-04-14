const express = require('express')
const { getTasks, getTaskById, addTask, deleteTask, completeTask } = require('./tasks')

const app = express()

app.use(express.json())

const tasks = [
    { id: 1, title: "Estudiar arrays", completed: false },
    { id: 2, title: "Practicar Git", completed: true }
]

app.get('/', (req, res) => {
    res.status(200).send('Servidor funcionando')
})

app.get('/tasks', (req, res) => {
    res.status(200).json(getTasks(tasks))
})

app.get('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    const task = getTaskById(tasks, id)

    if (task) {
        return res.status(200).json(task)
    }

    return res.status(404).json({ message: 'Tarea no encontrada' })
})

app.post('/tasks', (req, res) => {
    const newTask = req.body

    if (!newTask.id || !newTask.title) {
        return res.status(400).json({ message: 'Faltan datos' })
    }

    const updatedTasks = addTask(tasks, newTask)
    return res.status(201).json(updatedTasks)
})

app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    const task = getTaskById(tasks, id)

    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    const updatedTasks = deleteTask(tasks, id)
    return res.status(200).json(updatedTasks)
})

app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    const task = getTaskById(tasks, id)

    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    const updatedTasks = completeTask(tasks, id)
    return res.status(200).json(updatedTasks)
})

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})