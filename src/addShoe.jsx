import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchModal from "./searchConfirmPopupModal.jsx";
import UploadImage from "./uploadImage.jsx";
import SearchAddBar from "./addBySearch.jsx";
import SearchAddList from "./searchAddList 2.jsx";
import ManualAdd from "./manualAdd.jsx";

const AddShoeCoulums = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightColumn = styled.div`
  margin-left: 10px;
`;
const SearchHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ViewChangeButton = styled.button`
  margin-left: 10px;
`;

function AddShoe(props) {
  const [sneakerSearchList, setSneakerSearchList] = useState([]);
  const [searchshoesilhoutte, setsearchshoesilhoutte] = useState("");
  const [brandname, setbrandname] = useState("");
  const [brands, setBrands] = useState([]);
  const [brandId, setBrandId] = useState(null);
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
  const [cuts, setCuts] = useState([]);
  const [shoecut, setshoecut] = useState(null);
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

  const getAllBrands = () => {
    axios("https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands")
      .then((res) => res.data)
      .then((brands) => setBrands(brands))
      .catch((err) => console.log(err));
  };

  const getAllCollectionsForBrand = (id) => {
    axios(
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands/${id}/collections`
    )
      .then((res) => res.data)
      .then((collections) => setCollections(collections))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setBrandId(e.target.value);
    getAllCollectionsForBrand(e.target.value);
  };

  const getSneaksData = (term) => {
    axios
      .get(
        `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/sneaks?term=${term}`,
        {
          params: {
            term: term,
          },
        }
      )
      .then((res) => res.data)
      .then((shoes) => setSneakerSearchList(shoes))
      .catch((err) => console.log(err));
  };

  const getModelsForCollection = (id) => {
    axios(
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands/${brandId}/collections/${id}/models`
    )
      .then((res) => res.data)
      .then((models) => setModels(models))
      .catch((err) => console.log(err));
  };
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
          brandId: brandId,
          userId: props.userId,
          collectionId: collectionId,
          cutId: shoecut,
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

  const handleCollectionChange = (e) => {
    setCollectionId(e.target.value);
    getModelsForCollection(e.target.value);
  };

  const handleModelChange = (e) => {
    setModelId(e.target.value);
  };

  const handlesubmit = () => {
    addShoe();
    props.setView("dashboard");
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
              getAllBrands();
              setBrandId("choose");
            }}
          >
            Create Brand
          </button>
        </div>
      );
    }
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
    getAllBrands();
    getSizeTypes();
    getAllTypes();
    getAllCuts();
  }, []);

  useEffect(() => {
    getAllBrands();
    getAllTypes();
    getAllCuts();
  }, [brandId]);

  useEffect(() => {
    getAllCollectionsForBrand(brandId || 0);
  }, [collectionId]);

  useEffect(() => {
    getModelsForCollection(collectionId || 0);
  }, [modelId]);

  const renderAddMethod = () => {
    if (addMethod === "automated") {
      return (
        <RightColumn>
          <SearchHeading>
            <h3>Search for shoe below or </h3>
            <ViewChangeButton onClick={() => setAddMethod("manual")}>
              Add Shoe Manually
            </ViewChangeButton>
          </SearchHeading>
          <SearchModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            setshoesize={setshoesize}
            sizetypes={sizetypes}
            setsizetype={setsizetype}
            setshoecolor={setshoecolor}
            setshoetype={setshoetype}
            types={types}
            setshoecut={setshoecut}
            cuts={cuts}
            setboxstatus={setboxstatus}
            setpurchaseprice={setpurchaseprice}
            setrecieptstatus={setrecieptstatus}
            setcollaborator={setcollaborator}
            handlesubmit={handlesubmit}
            shoename={shoename}
            stylecode={stylecode}
            brandname={brandname}
            shoecolor={shoecolor}
            searchshoesilhoutte={searchshoesilhoutte}
            modalimageurl={modalimageurl}
            modalimagealt={modalimagealt}
          />
          <SearchAddBar getSneaksData={getSneaksData} />
          <SearchAddList
            sneakerSearchList={sneakerSearchList}
            setshoename={setshoename}
            setstylecode={setstylecode}
            setDescription={setDescription}
            setImageId={setImageId}
            setModelId={setModelId}
            setBrandId={setBrandId}
            brandId={brandId}
            setCollectionId={setCollectionId}
            collectionId={collectionId}
            setModalShow={setModalShow}
            setshoecolor={setshoecolor}
            setbrandname={setbrandname}
            setsearchshoesilhoutte={setsearchshoesilhoutte}
            setmodalimageurl={setmodalimageurl}
            setmodalimagealt={setmodalimagealt}
            setReleaseDate={setReleaseDate}
            setSneaksId={setSneaksId}
            setRetailPrice={setRetailPrice}
          />
        </RightColumn>
      );
    } else if (addMethod === "manual") {
      return (
        <div>
          <SearchHeading>
            <h3>Add shoe below</h3>
          </SearchHeading>
          <ManualAdd
            brands={brands}
            createBrandField={createBrandField}
            handleCollectionChange={handleCollectionChange}
            collections={collections}
            makeCollection={makeCollection}
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
            setshoecut={setshoecut}
            cuts={cuts}
            setboxstatus={setboxstatus}
            setpurchaseprice={setpurchaseprice}
            setrecieptstatus={setrecieptstatus}
            setDescription={setDescription}
            setcollaborator={setcollaborator}
            handlesubmit={handlesubmit}
            setView={props.setView}
            handleChange={handleChange}
            setImageId={setImageId}
            setAddMethod={setAddMethod}
          />
        </div>
      );
    }
  };

  return <AddShoeCoulums>{renderAddMethod()}</AddShoeCoulums>;
}

export default AddShoe;
