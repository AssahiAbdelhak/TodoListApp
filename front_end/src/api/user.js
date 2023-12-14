import axios from 'axios'
import getApiRequest from './api'

export const connectUser = async (data) => {
    const request = getApiRequest({
        method : 'post',
        data,
        params : {},
        url : '/login',
    })
    
    const response = await axios(request)
    console.log("🚀 ~ file: user.js:13 ~ connectUser ~ response:", response)
    
    return response.data.user
}
export const createUser = async (data) => {
    const request = getApiRequest({
        method : 'post',
        data,
        params : {},
        url : '/register',
    })
    console.log(request)
    
    const response = await axios(request)
    console.log(response)
    return response.data.user
}