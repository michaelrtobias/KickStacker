import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import UploadImage from "./uploadImage.jsx";
import ManualAdd from "./manualAdd.jsx";
import { handleBrandData } from "./redux/brands/brandsSlice.js";
import { handleCutsData } from "./redux/cuts/cutsThunks.js";
import store from "./redux/store.js";

const AddForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: coulmn;
`;

const AddShoeCoulums = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightColumn = styled.div`
  margin-left: 10px;
`;
const SearchHeading = styled.div``;

const ViewChangeButton = styled.button`
  margin-left: 10px;
`;

function AddShoe(props) {
  const [sneakerSearchList, setSneakerSearchList] = useState([]);
  const [searchshoesilhoutte, setsearchshoesilhoutte] = useState("");
  const [brandname, setbrandname] = useState("");
  const [brands, setBrands] = useState([]);
  const [collections, setCollections] = useState([]);
  const [collectionId, setCollectionId] = useState(null);
  const [models, setModels] = useState([]);
  const [modelId, setModelId] = useState(null);
  const [stylecode, setstylecode] = useState("");
  const [shoename, setshoename] = useState("");
  const [shoeNickname, setShoeNickname] = useState("");
  const [shoecolor, setshoecolor] = useState("");
  const [shoeSize, setshoesize] = useState(null);
  const [sizetypes, setsizetypes] = useState([]);
  const [sizetype, setsizetype] = useState(null);
  const [boxstatus, setboxstatus] = useState(null);
  const [wears, setWears] = useState(null);
  const [purchaseprice, setpurchaseprice] = useState(null);
  const [description, setDescription] = useState(null);
  const [recieptstatus, setrecieptstatus] = useState(null);
  const [collaborator, setcollaborator] = useState(null);
  const [types, setTypes] = useState([]);
  const [shoeType, setshoetype] = useState(null);
  const [newBrand, setNewBrand] = useState("");
  const [brandHeadquarters, setBrandHeadquarters] = useState("");
  const [newCollection, setNewCollection] = useState("");
  const [newModel, setNewModel] = useState("");
  const [imageId, setImageId] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [releaseDate, setReleaseDate] = useState("");
  const [modalimageurl, setmodalimageurl] = useState("");
  const [modalimagealt, setmodalimagealt] = useState("");
  const [addMethod, setAddMethod] = useState("manual");
  const [sneaksId, setSneaksId] = useState("sneaksId");
  const [retailPrice, setRetailPrice] = useState("");
  const [addShoeEntry, setAddShoeEntry] = useState({});

  const getAllCollectionsForBrand = (id) => {
    axios(
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands/${id}/collections`
    )
      .then((res) => res.data)
      .then((collections) => setCollections(collections))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setAddShoeEntry({ ...addShoeEntry, brandId: e.target.value });
    getAllCollectionsForBrand(e.target.value);
  };

  // const getModelsForCollection = (id) => {
  //   axios(
  //     `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands/${brandId}/collections/${id}/models`
  //   )
  //     .then((res) => res.data)
  //     .then((models) => setModels(models))
  //     .catch((err) => console.log(err));
  // };
  const getSizeTypes = () => {
    axios(`https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/sizetype`)
      .then((res) => res.data)
      .then((sizeType) => setsizetypes(sizeType))
      .catch((err) => console.log(err));
  };

  const getAllCuts = () => {
    axios("https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/cuts")
      .then((res) => res.data)
      .then((cuts) => setCuts(cuts))
      .catch((err) => console.log(err));
  };

  const getAllTypes = () => {
    axios("https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/types")
      .then((res) => res.data)
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  };

  const addShoe = () => {
    fetch(
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users/${props.userId}/shoes`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: shoename,
          styleCode: stylecode,
          color: shoecolor,
          size: shoeSize,
          sizetypeId: sizetype,
          boxStatus: boxstatus,
          imageId: imageId,
          wears: wears,
          purchasePrice: purchaseprice,
          description: description,
          receipt: recieptstatus,
          nickname: shoeNickname,
          modelId: modelId,
          brandId: props.addShoeEntry.brandId,
          userId: 1,
          collectionId: collectionId,
          cutId: props.addShoeEntry.shoecut,
          typeId: shoeType,
          collaborator: collaborator,
          releaseDate: releaseDate,
          sneaksId: sneaksId,
          retailPrice: retailPrice,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((shoe) => props.getUsersShoes(shoe.userId));
  };

  // const handleCollectionChange = (e) => {
  //   setAddShoeEntry({ ...addShoeEntry, collectionId: e.target.value });
  //   getModelsForCollection(e.target.value);
  // };

  const handleModelChange = (e) => {
    setModelId(e.target.value);
  };

  const handlesubmit = () => {
    addShoe();
  };

  const createBrand = () => {
    axios
      .post(
        "https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands",
        {
          name: newBrand,
          headquarters: brandHeadquarters,
        }
      )
      .then((res) => console.log(res.data));
  };

  const createCollection = () => {
    axios
      .post(
        `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands/${brandId}/collections`,
        {
          name: newCollection,
          brandId: brandId,
        }
      )
      .then((res) => setCollectionId(res.data.id));
  };

  const createModel = () => {
    axios
      .post(
        `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands/${brandId}/collections/${collectionId}/models`,
        {
          name: newModel,
          brandId: brandId,
          collectionId: collectionId,
        }
      )
      .then((res) => setModelId(res.data.id));
  };

  const makeModel = () => {
    if (modelId === "0") {
      return (
        <div>
          <label>New Model: </label>
          <input
            placeholder="Enter Model Name"
            onChange={(e) => setNewModel(e.target.value)}
          ></input>
          <button
            onClick={() => {
              createModel();
            }}
          >
            Create Model
          </button>
        </div>
      );
    }
  };

  useEffect(() => {
    store.dispatch(handleBrandData);
    store.dispatch(handleCutsData);
    getSizeTypes();
    getAllTypes();
    getAllCuts();
  }, []);

  // useEffect(() => {
  //   getAllTypes();
  //   getAllCuts();
  // }, [brandId]);

  // useEffect(() => {
  //   getAllCollectionsForBrand(brandId || 0);
  // }, [collectionId]);

  // useEffect(() => {
  //   getModelsForCollection(collectionId || 0);
  // }, [modelId]);

  const renderAddMethod = () => {
    return (
      <AddForm>
        <ManualAdd
          brands={brands}
          collections={collections}
          setModelId={setModelId}
          models={models}
          makeModel={makeModel}
          setshoename={setshoename}
          setShoeNickname={setShoeNickname}
          setstylecode={setstylecode}
          setshoesize={setshoesize}
          setsizetype={setsizetype}
          sizetypes={sizetypes}
          setshoecolor={setshoecolor}
          setshoetype={setshoetype}
          types={types}
          setboxstatus={setboxstatus}
          setpurchaseprice={setpurchaseprice}
          setrecieptstatus={setrecieptstatus}
          setDescription={setDescription}
          setcollaborator={setcollaborator}
          handlesubmit={handlesubmit}
          handleChange={handleChange}
          setImageId={setImageId}
          setAddMethod={setAddMethod}
          setAddShoeEntry={setAddShoeEntry}
          addShoeEntry={addShoeEntry}
        />
      </AddForm>
    );
  };

  return <AddShoeCoulums>{renderAddMethod()}</AddShoeCoulums>;
}

export default AddShoe;
