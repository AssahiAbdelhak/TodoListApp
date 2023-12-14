import { deleteTodo, insertTodo, patchTodo, searchTodos } from "../database/services/todo.js"

export async function getTodos(req,res){

    let todos = await searchTodos(req.params.id)
    
    res.send({
        succes : 'true',
        data : todos
    })
}
export async function removeTodo(req,res){

    await deleteTodo(req.params.id)
    
    res.send('fin')
}
export async function addTodo(req,res){

    console.log(req.body)
    insertTodo(req.body)
    
    res.send('fin')
}
export async function updateTodo(req,res){

    patchTodo({id : req.params.id,...req.body})
    res.send('fin')

}