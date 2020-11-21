import React, { useEffect, useState } from "react";

function Dashboard(props) {





  useEffect(() => {
   props.getUserById(props.userId)
   props.getUsersShoes()
  }, [])
  return (
    <div>
    <div>{props.user.firstName}'s Dashboard</div>
    </div>
  )
}

export default Dashboard;