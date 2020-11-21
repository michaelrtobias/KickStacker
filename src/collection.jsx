import React, { useEffect, useState } from "react";
import Shoe from './shoe.jsx'

function Collection(props) {

  return (
    <div>
      <h3>Collection</h3>
      {props.userSneakers.map(shoe =>
        <Shoe shoe={shoe}/>
      )}
    </div>
  )
}

export default Collection;