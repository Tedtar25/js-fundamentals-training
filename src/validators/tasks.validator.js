function isIdValid(id) {
    return typeof id === 'number' && !Number.isNaN(id) && id > 0
}

function isTitleValid(title) {
    return typeof title === 'string' && title.trim() !== ''
}

module.exports = {
    isIdValid,
    isTitleValid
}