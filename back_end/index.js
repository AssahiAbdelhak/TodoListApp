import Fastify from "fastify";
import fastifyCors from '@fastify/cors';
import dotenv from 'dotenv'
import { connectUser, registerUser } from "./controllers/userController.js";

dotenv.config()

const app = Fastify()

await app.register(fastifyCors,{
    origin :'*'
})

app.post('/login',connectUser)
app.post('/register',registerUser)

app.listen({port : process.env.PORT},function(){
    console.log('server launched')
})