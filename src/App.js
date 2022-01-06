import React, { useState, useEffect } from "react";
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then((response) => response.json())
      .then((newusers) => {
        setUsers(newusers);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <Header />
        <UserList
          users={users}
          setUsers={setUsers}
          modal={modal}
          setModal={setModal}
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
        />
        {modal ? (
          <Modal modalInfo={modalInfo} setModal={setModal} modal={modal} />
        ) : (
          <div></div>
        )}
        <Footer />
      </div>
    </div>
  );
}
export default App;
