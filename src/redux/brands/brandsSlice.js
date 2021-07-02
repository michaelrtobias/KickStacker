import store from "../store.js";
import axios from "axios";

const REQUESTING_BRAND_DATA = "FORM/REQUESTING_BRAND_DATA";
const RECEIVED_BRAND_DATA = "FORM/RECEIVED_BRAND_DATA";

const requestingData = () => {
  return { type: REQUESTING_BRAND_DATA };
};
const receivedData = (brands) => {
  return { type: RECEIVED_BRAND_DATA, brands: brands.data };
};

const initialFormState = {
  fetching: false,
  brands: [],
};

export async function handleBrandData(dispatch, getState) {
  try {
    const state = getState();
    store.dispatch(requestingData());

    const response = await axios.get(
      "https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/brands"
    );
    store.dispatch(receivedData(response));
  } catch (error) {
    throw error;
  }
}

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case REQUESTING_BRAND_DATA:
      return {
        fetching: true,
        brands: [],
      };
    case RECEIVED_BRAND_DATA:
      return {
        fetching: false,
        brands: action.brands,
      };
    default:
      return state;
  }
};

export default formReducer;
