import React, { useEffect, useState } from "react";

function Shoe(props) {

  return(
    <div>
      <div>
        {props.shoe.name}
      </div>
    </div>
  )
}

export default Shoe;