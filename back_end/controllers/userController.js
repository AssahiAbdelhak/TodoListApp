import { createUser,getUser } from "../database/services/user.js"
import {hash,verify} from 'argon2'

export const connectUser = async (req,res) => {
    const user = await getUser({email : req.body.email})
    console.log('here in connect user')
    if(verify(user.password,req.body.password)){
        console.log('good password')
        res.send({
            succes : true,
            user
        })
    }else{
        res.status(401).send({
            succes : false,
                message : 'bad credentials'
        })
    }
}
export const registerUser = async (req,res) => {
    console.log(req.body)
    await createUser({user : {
        ...req.body,
        password : await hash(req.body.password)
    }})
    res.send({
        succes : true,
            message : 'user created!!'
    })
}
