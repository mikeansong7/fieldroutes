import React, { useState, useEffect } from "react";
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';
function App() {
 const [users, setUsers] = useState ([])

 useEffect(() => {
 fetch('https://randomuser.me/api/?results=9')
 .then(response => response.json())
 .then(newusers => {
   setUsers(newusers)
 })

 }, [])

  return (
    <div className="App">
      <div className="container">
      <Header />
      <UserList users={users} setUsers={setUsers}/>
      <Footer />
      </div>
    </div>
  );}
export default App;
