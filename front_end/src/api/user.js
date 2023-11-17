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

}