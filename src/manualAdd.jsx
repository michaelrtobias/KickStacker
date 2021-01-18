import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UploadImage from "./uploadImage.jsx";

function ManualAdd(props) {
  return (
    <div>
      <div>
        <label>Select A Brand </label>
        <select
          onChange={(e) => {
            props.handleChange(e);
          }}
        >
          <option value>Select a brand</option>
          <option value="0">Create A New Brand</option>
          {props.brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
        <div>{props.createBrandField()}</div>
      </div>
      <div>
        <label>Select A Collection </label>
        <select
          onChange={(e) => {
            props.handleCollectionChange(e);
          }}
        >
          <option value>Select a collection</option>
          <option value="0">Create A New Collection</option>
          {props.collections.map((collection) => (
            <option key={collection.id} value={collection.id}>
              {collection.name}
            </option>
          ))}
        </select>
        <div>{props.makeCollection()}</div>
      </div>
      <div>
        <label>Select A Model </label>
        <select onChange={(e) => props.setModelId(e.target.value)}>
          <option value>Select a model</option>
          <option value="0">Create A New Model</option>
          {props.models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <div>{props.makeModel()}</div>
      </div>
      <div>
        <label>Name on Box:</label>
        <input
          placeholder="Enter Name on Box"
          onChange={(e) => props.setshoename(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Shoe Nickname:</label>
        <input
          placeholder="Enter Nickname"
          onChange={(e) => props.setShoeNickname(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Style Code:</label>
        <input
          placeholder="Enter Style Code"
          onChange={(e) => props.setstylecode(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Size:</label>
        <input
          placeholder="Enter Size"
          onChange={(e) => props.setshoesize(e.target.value)}
        ></input>
        <select onChange={(e) => props.setsizetype(e.target.value)}>
          <option value>Size Type</option>
          {props.sizetypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.sizeType}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Color:</label>
        <input
          placeholder="Enter Color"
          onChange={(e) => props.setshoecolor(e.target.value)}
        ></input>
      </div>
      <div>
        <label>What kind of shoe is it? </label>
        <select onChange={(e) => props.setshoetype(e.target.value)}>
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
        <select onChange={(e) => props.setshoecut(e.target.value)}>
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
          onChange={(e) => props.setboxstatus(e.target.value)}
        ></input>
        <label htmlFor="boxstatus">False</label>
        <input
          type="radio"
          value="false"
          name="boxstatus"
          onChange={(e) => props.setboxstatus(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Purchase Price: </label>
        <input
          type="number"
          onChange={(e) => props.setpurchaseprice(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Do you have the receipt?: </label>
        <label htmlFor="receiptstatus">True</label>
        <input
          type="radio"
          value="true"
          name="receiptstatus"
          onChange={(e) => props.setrecieptstatus(e.target.value)}
        ></input>
        <label htmlFor="receiptstatus">False</label>
        <input
          type="radio"
          value="false"
          name="receiptstatus"
          onChange={(e) => props.setrecieptstatus(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Description/Comments: </label>
        <input
          placeholder="Optional"
          onChange={(e) => props.setDescription(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Is the shoe collaboration? If yes, with who?</label>
        <input onChange={(e) => setcollaborator(e.target.value)}></input>
      </div>

      <UploadImage setImageId={props.setImageId} />

      <button onClick={() => props.handlesubmit()}>Add Shoe</button>
      <button onClick={() => props.setView("dashboard")}>Cancel</button>
    </div>
  );
}

export default ManualAdd;
