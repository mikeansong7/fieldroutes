import React from "react";

function Modal({user,handleModal}){

if(user) {
    return(
        <div onClick={handleModal} className= "modal">
              <div>
                <img className= "modalheader" src={user.picture.thumbnail} alt ={user.name} />
                <div className= "modaltitle">
                <h2> {user.name.first} {user.name.last} </h2>
                <div className= "modalcontent">
                    <h6>Age:{user.dob.age}</h6>
                    <h6> </h6>
                    <h6>{user.location.street.number} {user.location.street.name}</h6>
                    <h6>{user.location.city}, {user.location.state} {user.location.postcode}</h6>
                    <h6>{user.phone}</h6>
                    <h6>{user.email}</h6>
                     </div>
                </div> 
             </div>  
        </div>
    )} else{
    return "opps"
}}
export default Modal

