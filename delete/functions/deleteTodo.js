const { sendResponse } = require('../responses/todo.response')
const { checkDeleteBody } = require('../middleware/todo.middleware')

function deleteTodo(todos, body) {
    if (checkDeleteBody(body)) {
        const updatedTodos = todos.filter(todo => todo.task !== body.task)
        while (todos.length > 0) {
            todos.pop()
        }
        for (let i = 0; i < updatedTodos.length; i++) {
            todos.push(updatedTodos[i])
        }
        return sendResponse(200, { success: true, todos })
    } else {
        return sendResponse(400, { success: false, message: 'Wrong data in body' })
    }
}

module.exports = { deleteTodo }
