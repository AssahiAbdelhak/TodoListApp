import db from '../db.js'

export const createUser = async ({user}) => {
    return await db('users').insert(user);
}

export const getUser = async ({email}) => {
    return await db('users').select('*').where('email','=',email).first();
}