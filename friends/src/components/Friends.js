import React, { useState, useEffect} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriend from './AddFriend'

const Friends = () => {
    const [friendsList, setFriendsList] = useState([])

    useEffect(() => {
        getFriends()
    }, [])

    const getFriends = () =>{
        axiosWithAuth().get('/friends')
        .then(res => {
            setFriendsList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>This is the friends List</h1>
            <AddFriend setFriendsList={setFriendsList} friendsList={friendsList}/>
            {friendsList.map(friend => {
                return (
                    <div key={friend.id}>
                    <h2>{friend.name}</h2>
                    <h2>{friend.age}</h2>
                    <h2>{friend.email}</h2>
                    </div>
                )
            })}
            {console.log(friendsList)}
        </div>
    )
}

export default Friends
