const {
    addTask,
    getTasks,
    deleteTask,
    completeTask
} = require('./tasks')

const tasks = [
    { id: 1, title: "Estudiar arrays", completed: false },
    { id: 2, title: "Practicar Git", completed: true }
]

const newTask = { id: 3, title: "Reforzar estudio", completed: false }

console.log(addTask(tasks, newTask))
console.log(getTasks(tasks))
console.log(deleteTask(tasks, 2))
console.log(completeTask(tasks, 3))
