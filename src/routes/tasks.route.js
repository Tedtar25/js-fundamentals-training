const { isIdValid, isTitleValid } = require("../validators/tasks.validator")

app.get('/', (req, res) => {
    res.status(200).send('Servidor funcionando')
})

app.get('/tasks', (req, res) => {
    res.status(200).json(getAllTasks(tasks))
})

app.get('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    const task = getTaskById(tasks, id)

    if (!isIdValid(id)) {
        return res.status(400).json({ message: 'ID inválido' })
    }

    if (task) {
        return res.status(200).json(task)
    }

    return res.status(404).json({ message: 'Tarea no encontrada' })
})


app.post('/tasks', (req, res) => {
    const { id, title } = req.body

    if (!isIdValid(id) || !isTitleValid(title)) {
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

    if (!isIdValid(id)) {
        return res.status(400).json({ message: 'ID invalido' })
    }

    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    const updatedTasks = deleteTask(tasks, id)
    return res.status(200).json(updatedTasks)
})

app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    if (!isIdValid(id)) {
        return res.status(400).json({ message: 'ID invalido' })
    }

    const task = getTaskById(tasks, id)
    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    const updatedTasks = completeTask(tasks, id)

    return res.status(200).json(updatedTasks)
})