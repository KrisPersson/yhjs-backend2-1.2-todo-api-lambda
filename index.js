const { sendResponse } = require('./responses/todo.response')
const { postTodo } = require('./functions/postTodo')
const { updateTodo } = require('./functions/updateTodo')
const { deleteTodo } = require('./functions/deleteTodo')



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
    console.log(event)
    const { method, path } = event.requestContext.http;

    if (method === 'GET' && path === '/todo') {
        return sendResponse(200, { success: true, todos }) 
    } else if (method === 'POST' && path === '/todo') {
        const body = JSON.parse(event.body)
        return postTodo(todos, body)
    } else if (method === 'PUT' && path === '/todo') {
        const body = JSON.parse(event.body)
        return updateTodo(todos, body)
    } else  if (method === 'DELETE' && path === '/todo') {
        const body = JSON.parse(event.body)
        return deleteTodo(todos, body)
    } else {
        return sendResponse(404, { success: false, message: 'URL not found' }) 
    }
};