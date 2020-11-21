import React, { useEffect, useState } from "react";
import axios from 'axios';
import SignIn from './SignIn.jsx'
import Dashboard from './Dashboard.jsx'


function App() {

  const [userSneakers, setUserSneakers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [view, setView] = useState('signin');
  const [users, setUsers] = useState([])

  const getAllUsers = () => {
      axios('/users')
      .then(res => res.data)
      .then((users) => setUsers(users))
      .catch(err => console.log(err))
    }
  useEffect(() => {
    getAllUsers()
  }, [])

  const renderView = () => {
        if (view === 'signin') {
        return users.length > 0 ? <SignIn  users={users} setUserId={setUserId} setView={setView}/> : null
        } else if (view === 'dashboard') {
          return <Dashboard />
        }
      }

    return (
    <div>
      <div>{renderView()}</div>
    </div>
    )
}

export default App;