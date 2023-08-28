const { sendResponse } = require('./responses/todo.response')
const { updateTodo } = require('./functions/updateTodo')
let todos = [
    {
        task: "Pay bills",
        done: false
    },
    {
        task: "Do dishes",
        done: false
    }
]

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body)
    return updateTodo(todos, body) 
};