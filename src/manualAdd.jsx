import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UploadImage from "./uploadImage.jsx";
import { useSelector } from "react-redux";

const ManualAddBottomButton = styled.button`
  margin: 0px 3px 0px 3px;
`;

const selectBrands = (state) => state.brands.brands;
const selectCuts = (state) => state.cuts.cuts;
function ManualAdd(props) {
  const brandId = props.addShoeEntry.brandId;
  const collectionId = props.addShoeEntry.collectionId;

  const brands = useSelector(selectBrands);
  const cuts = useSelector(selectCuts);
  const createBrandField = () => {
    if (brandId === "0") {
      return (
        <div>
          <label>New Brand: </label>
          <input
            placeholder="Enter Brand Name"
            onChange={(e) => setNewBrand(e.target.value)}
          ></input>
          <input
            placeholder="Enter Brand HQ"
            onChange={(e) => setBrandHeadquarters(e.target.value)}
          ></input>
          <button
            onClick={() => {
              createBrand();
              // getAllBrands();
              setBrandId("choose");
            }}
          >
            Create Brand
          </button>
        </div>
      );
    }
  };

  const makeCollection = () => {
    if (collectionId === "0") {
      return (
        <div>
          <label>New Collection: </label>
          <input
            placeholder="Enter Collection"
            onChange={(e) => setNewCollection(e.target.value)}
          ></input>
          <button
            onClick={() => {
              createCollection();
            }}
          >
            Create Collection
          </button>
        </div>
      );
    }
  };
  return (
    <div>
      <h3>Add shoe below</h3>
      <div>
        <label>Select A Brand </label>
        <select
          onChange={(e) => {
            props.handleChange(e);
          }}
        >
          <option value>Select a brand</option>
          <option value="0">Create A New Brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
        <div>{createBrandField()}</div>
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
        <div>{makeCollection()}</div>
      </div>
      <div>
        <label>Select A Model </label>
        <select
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              modelId: e.target.value,
            })
          }
        >
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
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              shoename: e.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <label>Shoe Nickname:</label>
        <input
          placeholder="Enter Nickname"
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              shoeNickname: e.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <label>Style Code:</label>
        <input
          placeholder="Enter Style Code"
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              stylecode: e.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <label>Size:</label>
        <input
          placeholder="Enter Size"
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              shoeSize: e.target.value,
            })
          }
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
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              shoecolor: e.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <label>What kind of shoe is it? </label>
        <select
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              shoeType: e.target.value,
            })
          }
        >
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
        <select
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              shoecut: e.target.value,
            })
          }
        >
          <option>Select a cut of shoe</option>
          {cuts.map((cut) => (
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
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              boxstatus: e.target.value,
            })
          }
        ></input>
        <label htmlFor="boxstatus">False</label>
        <input
          type="radio"
          value="false"
          name="boxstatus"
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              boxstatus: e.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <label>Purchase Price: </label>
        <input
          type="number"
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              purchaseprice: e.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <label>Do you have the receipt?: </label>
        <label htmlFor="receiptstatus">True</label>
        <input
          type="radio"
          value="true"
          name="receiptstatus"
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              recieptstatus: e.target.value,
            })
          }
        ></input>
        <label htmlFor="receiptstatus">False</label>
        <input
          type="radio"
          value="false"
          name="receiptstatus"
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              recieptstatus: e.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <label>Description/Comments: </label>
        <input
          placeholder="Optional"
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              description: e.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <label>Is the shoe collaboration? If yes, with who?</label>
        <input
          onChange={(e) =>
            props.setAddShoeEntry({
              ...props.addShoeEntry,
              collaborator: e.target.value,
            })
          }
        ></input>
      </div>

      <UploadImage setImageId={props.setImageId} />

      <ManualAddBottomButton onClick={() => props.handlesubmit()}>
        Add Shoe
      </ManualAddBottomButton>
      <ManualAddBottomButton onClick={() => props.setView("dashboard")}>
        Cancel
      </ManualAddBottomButton>
    </div>
  );
}

export default ManualAdd;
