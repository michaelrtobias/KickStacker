import React, { useEffect, useState } from "react";
import axios from 'axios';
import SignIn from './SignIn.jsx'
import Dashboard from './Dashboard.jsx'
import AddShoe from './addShoe.jsx'

function App() {

  const [userId, setUserId] = useState(0);
  const [view, setView] = useState('signin');
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userSneakers, setUserSneakers] = useState([]);

  const getAllUsers = () => {
      axios('/users')
      .then(res => res.data)
      .then((users) => setUsers(users))
      .catch(err => console.log(err))
    }

  const getUserById = (id) => {
    axios(`users/user?userId=${id}`)
    .then(res => res.data[0])
    .then(user => setUser(user))
    .catch(err => console.log(err))
  }

  const getUsersShoes = () => {
    axios(`/user?userId=${userId}`)
    .then(res => res.data)
    .then(shoes => setUserSneakers(shoes))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const renderView = () => {
        if (view === 'signin') {
        return users.length > 0 ? <SignIn
                                      users={users}
                                      setUserId={setUserId}
                                      setView={setView}
                                      getUserById={getUserById}/> : null
        } else if (view === 'dashboard') {
          return <Dashboard getUserById={getUserById}
                            user={user}
                            userId={userId}
                            setView={setView}
                            getUsersShoes={getUsersShoes}
                            userSneakers={userSneakers}/>
        } else if (view === 'addshoe') {
          return <AddShoe setView={setView}
                          userId={userId}
                          getUsersShoes={getUsersShoes}/>
        }
      }

    return (
    <div>
      <div>{renderView()}</div>
    </div>
    )
}

export default App;