
function addTask(tasks, newTask) {
    tasks.push(newTask)
    return tasks
}

function getTasks(tasks) {
    return tasks
}

function deleteTask(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1)
            return tasks
        }
    }
    return tasks
}

function completeTask(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true
            return tasks
        }
    }
    return tasks
}

module.exports = {
    addTask,
    getTasks,
    deleteTask,
    completeTask
}