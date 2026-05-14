import { isIdValid } from "../validators/task.validator.js"

function idMiddleware(req, res, next) {
    const id = Number(req.params.id)

    if (!isIdValid(id)) {
        return res.status(400).json({ message: 'ID invalido' })
    }

    req.params.id = id
    next()
}

export { idMiddleware }

