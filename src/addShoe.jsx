import React, { useEffect, useState } from "react";
import axios from "axios";
function AddShoe(props) {
  const [brands, setBrands] = useState([]);
  const [brandId, setBrandId] = useState(null);
  const [collections, setCollections] = useState([]);
  const [collectionId, setCollectionId] = useState(null);
  const [models, setModels] = useState([]);
  const [modelId, setModelId] = useState(null);
  const [styleCode, setStyleCode] = useState("");
  const [shoeName, setShoeName] = useState("");
  const [shoeNickname, setShoeNickname] = useState("");
  const [shoeColor, setShoeColor] = useState("");
  const [shoeSize, setShoeSize] = useState(null);
  const [sizeTypes, setSizeTypes] = useState([]);
  const [sizeType, setSizeType] = useState(null);
  const [boxStatus, setBoxStatus] = useState(null);
  const [wears, setWears] = useState(null);
  const [purchasePrice, setPurchasePrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [recieptStatus, setRecieptStatus] = useState(null);
  const [collaborator, setCollaborator] = useState(null);
  const [types, setTypes] = useState([]);
  const [shoeType, setShoeType] = useState(null);
  const [cuts, setCuts] = useState([]);
  const [shoeCut, setShoeCut] = useState(null);
  const [newBrand, setNewBrand] = useState("");
  const [brandHeadquarters, setBrandHeadquarters] = useState("");
  const [newCollection, setNewCollection] = useState("");

  const getAllBrands = () => {
    axios("/brands")
      .then((res) => res.data)
      .then((brands) => setBrands(brands))
      .catch((err) => console.log(err));
  };

  const getAllCollectionsForBrand = (id) => {
    axios(`/collections?brandId=${id}`)
      .then((res) => res.data)
      .then((collections) => setCollections(collections))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setBrandId(e.target.value);
    getAllCollectionsForBrand(e.target.value);
  };

  const getModelsForCollection = (id) => {
    axios(`/models?collectionId=${id}`)
      .then((res) => res.data)
      .then((models) => setModels(models))
      .catch((err) => console.log(err));
  };
  const getSizeTypes = () => {
    axios(`/sizeTypes`)
      .then((res) => res.data)
      .then((sizeType) => setSizeTypes(sizeType))
      .catch((err) => console.log(err));
  };

  const getAllCuts = () => {
    axios("/cuts")
      .then((res) => res.data)
      .then((cuts) => setCuts(cuts))
      .catch((err) => console.log(err));
  };

  const getAllTypes = () => {
    axios("/types")
      .then((res) => res.data)
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  };

  const addShoe = () => {
    fetch("/shoes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: shoeName,
        styleCode: styleCode,
        color: shoeColor,
        size: shoeSize,
        sizetypeId: sizeType,
        boxStatus: boxStatus,
        imageURL: null,
        wears: wears,
        purchasePrice: purchasePrice,
        description: description,
        receipt: recieptStatus,
        wears: 0,
        nickname: shoeNickname,
        modelId: modelId,
        brandId: brandId,
        userId: props.userId,
        collectionId: collectionId,
        cutId: shoeCut,
        typeId: shoeType,
        collaborator: collaborator,
      }),
    })
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

  const handleSubmit = () => {
    addShoe();
    props.setView("dashboard");
  };

  const createBrand = () => {
    axios
      .post("/brands", {
        name: newBrand,
        headquarters: brandHeadquarters,
      })
      .then((res) => console.log(res.data));
  };

  const createField = () => {
    if (brandId === "create") {
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
      .post("/collections", {
        name: newCollection,
        brandId: brandId,
      })
      .then((res) => console.log(res.data));
  };

  const makeCollection = () => {
    if (collectionId === "create") {
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
              getAllCollectionsForBrand(brandId);
              setCollectionId("choose");
            }}
          >
            Create Brand
          </button>
        </div>
      );
    }
  };

  const makeModel = () => {
    if (modelId === "create") {
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
  useEffect(() => {
    getAllBrands();
    getSizeTypes();
    getAllTypes();
    getAllCuts();
  }, []);

  return (
    <div>
      <div>
        <label>Select A Brand </label>
        <select
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value>Select a brand</option>
          <option value="create">Create A New Brand</option>
          {brands.map((brand) => (
            <option value={brand.id}>{brand.name}</option>
          ))}
        </select>
        <div>{createField()}</div>
      </div>
      <div>
        <label>Select A Collection </label>
        <select
          onChange={(e) => {
            handleCollectionChange(e);
          }}
        >
          <option value>Select a collection</option>
          <option value="create">Create A New Collection</option>
          {collections.map((collection) => (
            <option value={collection.id}>{collection.name}</option>
          ))}
        </select>
        <div>{makeCollection()}</div>
      </div>
      <div>
        <label>Select A Model </label>
        <select onChange={(e) => setModelId(e.target.value)}>
          <option value>Select a model</option>
          <option value="create">Create A New Model</option>
          {models.map((model) => (
            <option value={model.id}>{model.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Name on Box:</label>
        <input
          placeholder="Enter Name on Box"
          onChange={(e) => setShoeName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Shoe Nickname:</label>
        <input
          placeholder="Enter Nickname"
          onChange={(e) => setShoeNickname(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Style Code:</label>
        <input
          placeholder="Enter Style Code"
          onChange={(e) => setStyleCode(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Size:</label>
        <input
          placeholder="Enter Size"
          onChange={(e) => setShoeSize(e.target.value)}
        ></input>
        <select onChange={(e) => setSizeType(e.target.value)}>
          <option value>Size Type</option>
          {sizeTypes.map((type) => (
            <option value={type.id}>{type.sizeType}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Color:</label>
        <input
          placeholder="Enter Color"
          onChange={(e) => setShoeColor(e.target.value)}
        ></input>
      </div>
      <div>
        <label>What kind of shoe is it? </label>
        <select onChange={(e) => setShoeType(e.target.value)}>
          <option>Select a type of shoe</option>
          {types.map((type) => (
            <option value={type.id}>{type.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>How high is the cut? </label>
        <select onChange={(e) => setShoeCut(e.target.value)}>
          <option>Select a cut of shoe</option>
          {cuts.map((cut) => (
            <option value={cut.id}>{cut.cut}</option>
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
          onChange={(e) => setBoxStatus(e.target.value)}
        ></input>
        <label htmlFor="boxstatus">False</label>
        <input
          type="radio"
          value="false"
          name="boxstatus"
          onChange={(e) => setBoxStatus(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Purchase Price: </label>
        <input
          type="number"
          onChange={(e) => setPurchasePrice(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Do you have the receipt?: </label>
        <label htmlFor="receiptstatus">True</label>
        <input
          type="radio"
          value="true"
          name="receiptstatus"
          onChange={(e) => setRecieptStatus(e.target.value)}
        ></input>
        <label htmlFor="receiptstatus">False</label>
        <input
          type="radio"
          value="false"
          name="receiptstatus"
          onChange={(e) => setRecieptStatus(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Description: </label>
        <input
          placeholder="Optional"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Is the shoe collaboration? If yes, with who?</label>
        <input onChange={(e) => setCollaborator(e.target.value)}></input>
      </div>
      <button onClick={() => handleSubmit()}>Add Shoe</button>
    </div>
  );
}

export default AddShoe;
