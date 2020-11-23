import React, { useEffect, useState } from "react";


function SignIn(props) {

  const [chosenUser, setChosenUser] = useState("1");
  const handleChange = (e) => {
    setChosenUser(e.target.value)

  }

  const handleClick = () => {
    props.setUserId(chosenUser)
    props.setView('dashboard')

  }
  return (
    <div>
    <select
      name="userPicker"
      id="userPicker"
      placeholder="Pick A User"
      onChange={e => handleChange(e)}
      // onChange={props.setUserId(e.target.value)}
      >
      {props.users.map((user) =>
        <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
      )}
    </select>
    <button onClick={() => handleClick()}>ENTER</button>
    </div>
  )
}

export default SignIn;