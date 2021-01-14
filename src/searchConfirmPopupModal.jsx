import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const ShoeBox = styled.div`
  background-color: #ffd9b3;
  padding: 15px;
  border: 5px solid black;
  margin: 5px 0px 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ModalImage = styled.img`
  border-radius: 8%;
  margin-right: 10px;
  flex: 0 0 100px;
  max-height: 50px;
  max-width: 75px;
`;
function SearchModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Finish adding shoe below
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalBox>
          <ShoeBox>
            <div>
              {props.brandName} - {props.searchShoeSilhoutte}
            </div>
            <ModalImage
              src={props.modalImageUrl}
              alt={props.modalImageAlt}
            ></ModalImage>
            <div>
              <div>{props.shoeName}</div>
              <div>{props.shoeColor}</div>
              <div>{props.styleCode}</div>
            </div>
          </ShoeBox>
          <div>
            <label>Size:</label>
            <input
              placeholder="Enter Size"
              onChange={(e) => props.setShoeSize(e.target.value)}
            ></input>
            <select onChange={(e) => props.setSizeType(e.target.value)}>
              <option value>Size Type</option>
              {props.sizeTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.sizeType}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>What kind of shoe is it? </label>
            <select onChange={(e) => props.setShoeType(e.target.value)}>
              <option>Select a type of shoe</option>
              {props.types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>How high is the cut? </label>
            <select onChange={(e) => props.setShoeCut(e.target.value)}>
              <option>Select a cut of shoe</option>
              {props.cuts.map((cut) => (
                <option key={cut.id} value={cut.id}>
                  {cut.cut}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Is there a box? : </label>
            <label htmlFor="boxstatus">True</label>
            <input
              type="radio"
              value="true"
              name="boxstatus"
              onChange={(e) => props.setBoxStatus(e.target.value)}
            ></input>
            <label htmlFor="boxstatus">False</label>
            <input
              type="radio"
              value="false"
              name="boxstatus"
              onChange={(e) => props.setBoxStatus(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Purchase Price: </label>
            <input
              type="number"
              onChange={(e) => props.setPurchasePrice(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Do you have the receipt?: </label>
            <label htmlFor="receiptstatus">True</label>
            <input
              type="radio"
              value="true"
              name="receiptstatus"
              onChange={(e) => props.setRecieptStatus(e.target.value)}
            ></input>
            <label htmlFor="receiptstatus">False</label>
            <input
              type="radio"
              value="false"
              name="receiptstatus"
              onChange={(e) => props.setRecieptStatus(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Is the shoe collaboration? If yes, with who?</label>
            <input
              onChange={(e) => props.setCollaborator(e.target.value)}
            ></input>
          </div>
        </ModalBox>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.handleSubmit()}>Add Shoe</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SearchModal;
