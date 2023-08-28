const { sendResponse } = require('./responses/todo.response')

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
    return sendResponse(200, { success: true, todos }) 
};