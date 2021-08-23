import React, {useState} from "react";
import Modal from "../Modal/Modal"


function UserCard({user}) {
    const [modal, setModal] = useState(true)
    function handleModal(){
        setModal(!modal)
    }

return(
       modal ? (
        <div onClick={handleModal}>
            <img className= "userimage" src={user.picture.thumbnail} alt= {user.name.first}/>
            <h6 className= "description"> {user.name.first} {user.name.last} | {user.location.state}, {user.location.country}</h6>
            <h6 className="learnmore">Learn More</h6>
        </div>
        ) : (<Modal user= {user} key={user.cell} handleModal={handleModal} />)
        )}
export default UserCard
