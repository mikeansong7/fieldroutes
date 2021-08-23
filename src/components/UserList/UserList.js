import React from "react";
import UserCard from "../UserCard/UserCard";

function UserList({users}) {

    const userList = users.results

return(
    <div>
        <ul className="usercards">
        {userList && userList.map((user) => (
            <li className= "usercard" key={user.cell}>
                <UserCard user={user} key={user.cell}/>
            </li> 
            ))}
        </ul>
    </div>
    )}
export default UserList

