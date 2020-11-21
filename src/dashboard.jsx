import React, { useEffect, useState } from "react";
import Collection from './collection.jsx'

function Dashboard(props) {

  useEffect(() => {
   props.getUserById(props.userId)
   props.getUsersShoes()
  }, [])
  return (
    <div>
    <div>{props.user.firstName}'s Dashboard</div>
    <Collection userSneakers={props.userSneakers}/>
    </div>
  )
}

export default Dashboard;