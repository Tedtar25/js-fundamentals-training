const tasks = [
    { id: 1, title: "Estudiar arrays", completed: false },
    { id: 2, title: "Practicar Git", completed: false },
    { id: 3, title: "Leer documentación de Express", completed: false }
]

function getAllTasks() {
    return tasks
}

function getTaskById(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return tasks[i]
        }
    }
    return null
}

function addTask(newTask) {
    tasks.push(newTask)
    return newTask
}

function completeTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true
            return tasks[i]
        }
    }
    return null
}

function deleteTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            const deletedTask = tasks[i]
            tasks.splice(i, 1)
            return deletedTask
        }
    }
    return null
}

export {
    getAllTasks,
    getTaskById,
    addTask,
    completeTask,
    deleteTask
}