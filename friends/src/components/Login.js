import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    const initialState = {
            username: '',
            password: ''
    }

    const [credentials, setCredentials] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setCredentials({
                ...credentials,
                [e.target.name]: e.target.value
        })
        // setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const submitLogin = (e) => {
        console.log(credentials.username, credentials.password)
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('/protected')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={submitLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder='Enter your username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='Enter your password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login
