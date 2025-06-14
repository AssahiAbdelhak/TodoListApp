import db from '../db.js'

export const createUser = async ({user}) => {
    console.log('Creating user:', user);
    return await db('users').insert(user);
}

export const getUser = async ({email}) => {
    console.log('Fetching user with email:', email);
    return await db('users').select('*').where('email','=',email).first();
}