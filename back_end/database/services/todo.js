// here functions that commnicate with db directly

import db from '../db.js'

export const searchTodos = async (id) => {
    let elems = await db('todos').select('*').where('id_user','=',id);
    return elems;
} 

export const deleteTodo = async (id) => {
    await db('todos').where('id','=',id).delete();
} 

export const insertTodo = async ({todo,state,id_user}) => {
    await db('todos').insert({
        todo,
        state,
        id_user,
    });
} 
export const patchTodo = async ({id,todo}) => {
    await db('todos').update({
        todo
    }).where('id','=',id);
} 