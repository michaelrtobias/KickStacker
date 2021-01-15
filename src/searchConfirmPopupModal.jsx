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
  justify-content: center;
`;

const SizeInputs = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 20px;
  margin-bottom: 5px;
`;

const LeftInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 0px 5px;
`;

const Rightinputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowInputs = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 20px;
  margin-bottom: 8px;
`;

const BoxInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
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
          {props.shoeName} - {props.styleCode} - {props.shoeColor}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalBox>
          <ModalImage
            src={props.modalImageUrl}
            alt={props.modalImageAlt}
          ></ModalImage>
          <LeftInputs>
            <SizeInputs>
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
            </SizeInputs>
            <div>
              <label>What kind of shoe is it? </label>
              <select onChange={(e) => props.setShoeType(e.target.value)}>
                <option>Select type</option>
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
                <option>Select a cut</option>
                {props.cuts.map((cut) => (
                  <option key={cut.id} value={cut.id}>
                    {cut.cut}
                  </option>
                ))}
              </select>
            </div>

            <BoxInput>
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
            </BoxInput>
          </LeftInputs>
          <Rightinputs>
            <RowInputs>
              <label>Purchase Price: </label>
              <input
                type="number"
                onChange={(e) => props.setPurchasePrice(e.target.value)}
              ></input>
            </RowInputs>
            <RowInputs>
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
            </RowInputs>
            <RowInputs>
              <label>Is the shoe collaboration? If yes, with who?</label>
              <input
                onChange={(e) => props.setCollaborator(e.target.value)}
              ></input>
            </RowInputs>
          </Rightinputs>
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
