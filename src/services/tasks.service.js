const tasks = [
    { id: 1, title: "Estudiar arrays", completed: false },
    { id: 2, title: "Practicar Git", completed: false },
    { id: 3, title: "Leer documentación de Express", completed: false }
]

function getAllTasks(tasks) {
    return tasks
}

function getTaskById(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return tasks[i]
        }
    }
    return null
}

function addTask(tasks, newTask) {
    tasks.push(newTask)
    return newTask
}

function completeTask(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true
            return tasks[i]
        }
    }
    return null
}

function deleteTask(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return tasks.splice(i, 1)
        }
    }
    return tasks
}

module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    completeTask,
    deleteTask
}