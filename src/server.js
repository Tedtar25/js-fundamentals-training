import express from 'express'
import router from './routes/task.route.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Servidor corriendo' })
})

app.use('/api', router)

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})
