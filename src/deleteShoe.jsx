import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteButton = styled.button`
  background-color: #6ca6c1;
  max-height: 32px;
`;

const FirstDeleteButton = styled.button`
  background-color: #6ca6c1;
  max-height: 32px;
`;

const DeleteConfirmText = styled.h4`
  color: black;
  text-align: center;
  font-size: 12px;
`;

function DeleteShoeButton(props) {
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const deleteShoe = (id) => {
    debugger;
    axios
      .delete(
        `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users/${props.userId}/shoes/${id}`
      )
      .then(() => props.getUsersShoes())
      .catch((err) => console.log(err));
  };

  const deleteConfirmRender = () => {
    if (deleteConfirm === false) {
      return (
        <FirstDeleteButton onClick={() => setDeleteConfirm(true)}>
          X
        </FirstDeleteButton>
      );
    } else if (deleteConfirm === true) {
      return (
        <div>
          <DeleteConfirmText>
            Are you sure <br></br>you want to delete?
          </DeleteConfirmText>
          <DeleteButton onClick={() => deleteShoe(props.id)}>
            Delete
          </DeleteButton>
          <DeleteButton onClick={() => setDeleteConfirm(false)}>
            Cancel
          </DeleteButton>
        </div>
      );
    }
  };

  return <div>{deleteConfirmRender()}</div>;
}

export default DeleteShoeButton;
