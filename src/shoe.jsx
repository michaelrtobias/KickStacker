import React, { useEffect, useState } from "react";

function Shoe(props) {
  const sizeType = (string) => {
    if (string === 1) {
      return "M";
    } else if (string === 2) {
      return "W";
    } else if (string === 3 || string === 4 || string === 5) {
      return "y";
    } else if (string === 6 || string === 7) {
      return "c";
    } else {
      return "type";
    }
  };

  return (
    <div>
      <div>
        {props.shoe.name} - {props.shoe.nickname}
      </div>
      <div>
        Size: {props.shoe.size} {sizeType(props.shoe.sizetypeId)}{" "}
        {props.shoe.styleCode}
      </div>
    </div>
  );
}

export default Shoe;
