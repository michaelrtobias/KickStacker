import React, { useEffect, useState } from "react";
import axios from 'axios'
function AddShoe(props) {

  const [brands, setBrands] = useState([]);
  const [brandId, setbrandId] = useState(null);
  const [collections, setCollections] = useState([]);
  const [collectionId, setCollectionId] = useState(null);
  const [models, setModels] = useState([]);
  const [modelId, setModelId] = useState(null);
  const [styleCode, setStyleCode] = useState('');
  const [shoeName, setShoeName] = useState('');
  const [shoeNickname, setShoeNickname] = useState('');
  const [shoeColor, setShoeColor] = useState('');
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
  const [cuts, setCut] = useState([]);
  const [shoeCut, setShoeCut] = useState(null);

  const getAllBrands = () => {
    axios('/brands')
    .then(res => res.data)
    .then(brands => setBrands(brands))
    .catch(err => console.log(err))
  }

  const getAllCollectionsForBrand = (id) => {
    axios(`/collections?brandId=${id}`)
    .then(res => res.data)
    .then(collections => setCollections(collections))
    .catch(err => console.log(err))
  }

  const handleChange = (e) => {
      setbrandId(e.target.value)
      getAllCollectionsForBrand(e.target.value)
    }

  const getModelsForCollection = (id) => {
    axios(`/models?collectionId=${id}`)
    .then(res => res.data)
    .then(models => setModels(models))
    .catch(err => console.log(err))
  }
  const getSizeTypes = () => {
    axios(`/sizeTypes`)
    .then(res => res.data)
    .then(sizeType => setSizeTypes(sizeType))
    .catch(err => console.log(err))
  }

  const handleCollectionChange = (e) => {
    setCollectionId(e.target.value)
    getModelsForCollection(e.target.value)
  }

  const handleModelChange = (e) => {
    setModelId(e.target.value)
  }

  useEffect(() => {
    getAllBrands()
    getSizeTypes()
  }, [])

  return (
    <form>
      <div>Form Rendered</div>
      <div>
      <label>Select A Brand </label>
        <select onChange={e => {handleChange(e)}}>
          <option selected>Select a brand</option>
          {brands.map(brand =>
            <option value={brand.id}>{brand.name}</option>
            )}
        </select>
      </div>
      <div>
        <label>Select A Collection </label>
        <select onChange={e => {handleCollectionChange(e)}}>
        <option selected>Select a collection</option>
        {collections.map(collection =>
            <option value={collection.id}>{collection.name}</option>
            )}
        </select>
      </div>
      <div>
        <label>Select A Model </label>
        <select onChange={e => {handleModelChange()}}>
        <option selected>Select a model</option>
        {models.map(model =>
            <option value={model.id}>{model.name}</option>
            )}
        </select>
      </div>
      <div>
        <label>Name on Box:</label>
        <input placeholder="Enter Name on Box" onChange={e => setShoeName(e.target.value)}></input>
      </div>
      <div>
        <label>Shoe Nickname:</label>
        <input placeholder="Enter Nickname" onChange={e => setShoeNickname(e.target.value)}></input>
      </div>
      <div>
        <label>Style Code:
        </label>
        <input placeholder="Enter Style Code" onChange={e => setStyleCode(e.target.value)}></input>
      </div>
      <div>
        <label>Size:</label>
        <input placeholder="Enter Size" onChange={e => setShoeSize(e.target.value)}></input>
        <select onChange={e => setSizeType(e.target.value)}>
        <option selected>Select a Size Type</option>
        {sizeTypes.map(type =>
            <option value={type.id}>{type.sizeType}</option>
            )}
        </select>
      </div>
      <div>
        <label>Color:</label>
        <input placeholder="Enter Color" onChange={e => setShoeColor(e.target.value)}></input>
      </div>
      <div>
        <label>Is there a box? :  </label>
        <label for="boxstatus">True</label>
        <input  type="radio" value="true" name="boxstatus" onChange={e => setBoxStatus(e.target.value)}></input>
        <label for="boxstatus">False</label>
        <input  type="radio" value="false" name="boxstatus" onChange={e => setBoxStatus(e.target.value)}></input>
      </div>
    </form>
  )
}

export default AddShoe;