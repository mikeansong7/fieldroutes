import React from "react";

function UserCard({ user, setModalInfo, modal, setModal }) {
  return (
    <div
      onClick={() => {
        setModalInfo(user);
        setModal(!modal);
      }}
    >
      <img
        className="userImage"
        src={user.picture.thumbnail}
        alt={user.name.first}
      />
      <p className="bio">
        <span style={{ fontWeight: "bold" }}>
          {user.name.first} {user.name.last}
        </span>
        <span>
          | {user.location.state}, {user.location.country}
        </span>
      </p>
      <p className="learnmore">Learn More</p>
    </div>
  );
}
export default UserCard;
