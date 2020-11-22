import React, { useEffect, useState } from "react";
import axios from 'axios'
function AddShoe(props) {

  const [brands, setBrands] = useState([])
  const [brandId, setbrandId] = useState(null)
  const [collections, setCollections] = useState([])
  const [collectionId, setCollectionId] = useState(null)
  const [models, setModels] = useState([])
  const [modelId, setModelId] = useState(null)

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

  const handleCollectionChange = (e) => {
    setCollectionId(e.target.value)
    getModelsForCollection(e.target.value)
  }

  const handleModelChange = (e) => {
    setModelId(e.target.value)
  }

  useEffect(() => {
    getAllBrands()

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
        {collections.map(collection =>
            <option value={collection.id}>{collection.name}</option>
            )}
        </select>
      </div>
      <div>
        <label>Select A Model </label>
        <select onChange={e => {handleModelChange()}}>
        {models.map(model =>
            <option value={model.id}>{model.name}</option>
            )}
        </select>
      </div>
    </form>
  )
}

export default AddShoe;