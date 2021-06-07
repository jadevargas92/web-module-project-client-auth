import React, { useState } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriend = (props) => {
    const initialState = {
        id: Date.now() + Math.random(),
        name: '',
        age: '',
        email: ''
    }

    const [newFriend, setNewFriend] = useState(initialState)
    

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const submitFriend = e => {
        e.preventDefault()
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            props.setFriendsList(res.data)
            console.log(props.friendsList)
            setNewFriend(initialState)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
        <form onSubmit={submitFriend}>
          <input
            type="text"
            name="name"
            placeholder='Enter a name'
            value={newFriend.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder='Enter an age'
            value={newFriend.age}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder='Enter an Email'
            value={newFriend.email}
            onChange={handleChange}
          />
          <button>Add Friend</button>
        </form>
        </div>
    )
}

export default AddFriend
