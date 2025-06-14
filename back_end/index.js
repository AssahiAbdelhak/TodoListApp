import Fastify from "fastify";
import fastifyCors from '@fastify/cors';
import dotenv from 'dotenv'
import { connectUser, registerUser } from "./controllers/userController.js";
import { addTodo, getTodos, removeTodo, updateTodo } from "./controllers/todosController.js";
dotenv.config({path : '../.env'})

const app = Fastify()

await app.register(fastifyCors,{
    origin :'*'
})



app.post('/login',connectUser)
app.post('/register',registerUser)

app.get('/todos/:id',getTodos)
app.post('/todos',addTodo)
app.patch('/todos/:id',updateTodo)
app.delete('/todos/:id',removeTodo)

app.listen({port : process.env.SERVER_PORT},function(){
    console.log('server launched')
})