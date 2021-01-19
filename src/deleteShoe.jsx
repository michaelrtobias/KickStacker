import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteButton = styled.button`
  background-color: #6ca6c1;
  max-height: 32px;
`;

function DeleteShoeButton(props) {
  const deleteShoe = (id) => {
    axios
      .delete(`/shoes?id=${id}`)
      .then(() => props.getUsersShoes())
      .catch((err) => console.log(err));
  };

  return <DeleteButton onClick={() => deleteShoe(props.id)}>X</DeleteButton>;
}

export default DeleteShoeButton;
