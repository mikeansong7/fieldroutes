import React from "react";
import UserCard from "../UserCard/UserCard";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function UserList({
  users,
  modal,
  setUsers,
  setModal,
  setModalInfo,
  modalInfo,
}) {
  const { width } = useWindowDimensions();
  const userList = users.results;
  if (width < 785) {
    return (
      <div>
        <ul className="usercardsSmall">
          {userList &&
            userList.map((user) => (
              <li className="usercard" key={user.cell}>
                <UserCard
                  user={user}
                  key={user.cell}
                  modal={modal}
                  setUsers={setUsers}
                  setModal={setModal}
                  modalInfo={modalInfo}
                  setModalInfo={setModalInfo}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="usercards">
          {userList &&
            userList.map((user) => (
              <li className="usercard" key={user.cell}>
                <UserCard
                  user={user}
                  key={user.cell}
                  modal={modal}
                  setUsers={setUsers}
                  setModal={setModal}
                  modalInfo={modalInfo}
                  setModalInfo={setModalInfo}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default UserList;
