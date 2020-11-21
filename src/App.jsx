import React, { useEffect, useState } from "react";
import SignIn from './SignIn.jsx'

const sampleUsers = [
  {
      "id": 1,
      "firstName": "Michael",
      "lastName": "Tobias",
      "createdAt": "2020-11-17T06:13:19.439Z",
      "updatedAt": "2020-11-17T06:13:19.439Z"
  },
  {
      "id": 2,
      "firstName": "Aimee",
      "lastName": "Tobias",
      "createdAt": "2020-11-17T06:13:29.121Z",
      "updatedAt": "2020-11-17T06:13:29.121Z"
  },
  {
      "id": 3,
      "firstName": "William",
      "lastName": "Tobias",
      "createdAt": "2020-11-18T23:04:22.332Z",
      "updatedAt": "2020-11-18T23:04:22.332Z"
  }
]

function App() {

  const [userSneakers, setUserSneakers] = useState([])
  const [view, setView] = useState('signin')
  // const renderView = () => {
  //     if ({view} === 'signin') {
  //      return  <SignIn />
  //     }
  //   }
  const [users, setUsers] = useState(sampleUsers)
    return (
    <div>
      <div>React is Rendered</div>
      {/* <div>{renderView()}</div> */}
      <SignIn  users={users}/>
    </div>
    )
}

export default App;