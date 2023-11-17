import axios from 'axios'
import isEmpty from 'lodash/isEmpty.js'

export default ({method,url,headers = {},params,data}) => {
    const token = localStorage.getItem('token')

    const apiHeaders  = {
        Authorization : token,
        ...headers
    }

    const requestInstance = {
        url,
        method,
        baseURL : import.meta.env.VITE_BACK_URL,
        headers: apiHeaders,
        params
    }

    if(isEmpty(method) || isEmpty(url)){ return {} }

    if(!isEmpty(data)){
        return {
            ...requestInstance,
            data
        }
    }
    return requestInstance
}