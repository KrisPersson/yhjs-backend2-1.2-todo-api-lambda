const { sendResponse } = require('../responses/todo.response')
const { checkBody } = require('../middleware/todo.middleware')

function updateTodo(todos, body) {
    if (checkBody(body)) {
        const updatedTodos = todos.map(todo => todo.task === body.task ? body : todo)
        while (todos.length > 0) {
            todos.pop()
        }
        for (let i = 0; i < updatedTodos.length; i++) {
            todos.push(updatedTodos[i])
        }
        return sendResponse(200, { success: true })
    } else {
        return sendResponse(400, { success: false, message: 'Wrong data in body' })
    }
}

module.exports = { updateTodo }
