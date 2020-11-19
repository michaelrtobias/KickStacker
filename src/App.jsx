import React, { useEffect, useState } from "react";
import SignIn from './SignIn.jsx'

function App() {

  const [userSneakers, setUserSneakers] = useState([])
  const [view, setView] = useState('signin')
  const renderView = () => {
      if ({view} === 'signin') {
       return  <SignIn />
      }
    }

    return (
    <div>
      <div>React is Rendered</div>
      <div>{renderView()}</div>
    </div>
    )
}

export default App;