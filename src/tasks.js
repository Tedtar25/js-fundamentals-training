function addTask(tasks, newTask) {
    tasks.push(newTask)
    return newTask
}

function getTasks(tasks) {
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

function deleteTask(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return tasks.splice(i, 1)
        }
    }
    return tasks
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

function idValidation(id) {
    return typeof id === 'number' && !Number.isNaN(id) && id > 0
}

function titleValidation(title) {
    return typeof title === 'string' && title.trim() !== ''
}

module.exports = {
    addTask,
    getTasks,
    deleteTask,
    completeTask,
    getTaskById,
    idValidation,
    titleValidation
}