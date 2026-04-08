const {
    addTask,
    getTasks,
    deleteTask,
    completeTask,
    getTaskById
} = require('./tasks')

const tasks = [
    { id: 1, title: "Estudiar arrays", completed: false },
    { id: 2, title: "Practicar Git", completed: true }
]

const newTask = { id: 3, title: "Reforzar estudio", completed: false }

console.log("Agregar tarea:", addTask(tasks, newTask))
console.log("Obtener tareas:", getTasks(tasks))
console.log("Eliminar tarea:", deleteTask(tasks, 2))
console.log("Completar tarea:", completeTask(tasks, 3))
console.log("La tarea con el id #1 es:", getTaskById(tasks, 1))