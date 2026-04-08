const tasks = [
    { id: 1, title: "Estudiar arrays", completed: false },
    { id: 2, title: "Practicar Git", completed: true }
]

const newTask = { id: 3, title: "Reforzar estudio", completed: false }

function addTask(tasks, newTask) {
    tasks.push(newTask)
    return tasks
}

console.log(addTask(tasks, newTask))

function getTasks(tasks) {
    return tasks
}

console.log(getTasks(tasks))


function deleteTask(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1)
            return tasks
        }
    }
    return tasks
}

console.log(deleteTask(tasks, 2))


function completeTask(tasks, id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true
            return tasks
        }
    }
    return tasks
}

console.log(completeTask(tasks, 3))

