import React, { useEffect, useState } from "react";


function SignIn(props) {
  return (
    <div>
    <div>SignIn is rendered</div>
    <select name="userPicker" id="userPicker" placeholder="Pick A User">
      {props.users.map((user) =>
        <option value={user.id}>{user.firstName} {user.lastName}</option>
      )}
    </select>
    </div>
  )
}

export default SignIn;