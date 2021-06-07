import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log(token, ': inside Axios with auth')
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
        baseURL: 'http://localhost:5000/api'
    })
}