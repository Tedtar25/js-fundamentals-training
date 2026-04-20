const express = require('express')
const { getTasks, getTaskById, addTask, deleteTask, completeTask, idValidation, titleValidation/*, isIdUnique*/ } = require('./tasks')

const app = express()

app.use(express.json())

const tasks = [
    { id: 1, title: "Estudiar arrays", completed: false },
    { id: 2, title: "Practicar Git", completed: false },
    { id: 3, title: "Leer documentación de Express", completed: false }
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
    const { id, title } = req.body

    if (!idValidation(id) || !titleValidation(title)) {
        return res.status(400).json({ message: 'Datos inválidos' })
    }

    if (getTaskById(tasks, id)) {
        return res.status(409).json({ message: 'ID ya existe' })
    }

    return res.status(201).json(addTask(tasks, { id, title, completed: false }))

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