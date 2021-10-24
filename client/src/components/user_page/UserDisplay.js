
import React from 'react'
import UserDisplayItem from './UserDisplayItem'


    const UserDisplay = ({users, onUserClick, onUserDelete}) => {
        const gridNodes = users.map((user, index) => {
            return <UserDisplayItem user={user} key={index} onUserDelete={onUserDelete}/>
        })
        return(
            <>
            <div className="user-display">
                <h2>ALL USERS</h2>
                {gridNodes}
            </div>
            </>

        )
    }


export default UserDisplay;
