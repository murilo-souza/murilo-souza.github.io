import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://myportfolio-f6dd7-default-rtdb.firebaseio.com/api'
})