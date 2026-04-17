/*
function addTask(tasks, newTask) {
    tasks.push(newTask)
    return tasks
}
*/

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
            return tasks[i]
        }
    }
    return null
}

/*
function completeTask(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true
            return tasks
        } else {
            return null
        }
    }
    return tasks
}
*/

module.exports = {
    addTask,
    getTasks,
    deleteTask,
    completeTask,
    getTaskById
}