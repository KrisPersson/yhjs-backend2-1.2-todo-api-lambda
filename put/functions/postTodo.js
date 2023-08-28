const { sendResponse } = require('../responses/todo.response')
const { checkBody } = require('../middleware/todo.middleware')

function postTodo(todos, body) {
    if (checkBody(body)) {
        todos.push(body)
        return sendResponse(200, { success: true, todos })
    } else {
        return sendResponse(400, { success: false, message: 'Wrong data in body' })
    }
}

module.exports = { postTodo }