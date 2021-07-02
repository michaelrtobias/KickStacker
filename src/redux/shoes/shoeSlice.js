import store from "../store.js";
import axios from "axios";

const REQUESTING_SHOE_DATA = "SHOES/REQUESTING_DATA";
const RECEIVED_SHOE_DATA = "SHOES/RECEIVED_DATA";

const requestingData = () => {
  return { type: REQUESTING_SHOE_DATA };
};
const receivedData = (shoes) => {
  return { type: RECEIVED_SHOE_DATA, shoes: shoes.data };
};

export async function handleShoeData(dispatch, getState) {
  try {
    const state = getState();
    store.dispatch(requestingData());

    const response = await axios.get(
      `https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/users/${1}/shoes`
    );
    const shoes = response.data;
    store.dispatch(receivedData(response));
  } catch (error) {
    throw error;
  }
}

const initialSneakerState = {
  fetching: false,
  shoes: [],
  userId: 1,
};

const shoeReducer = (state = initialSneakerState, action) => {
  switch (action.type) {
    case REQUESTING_SHOE_DATA:
      return {
        fetching: true,
        shoes: [],
        userId: 1,
      };
    case RECEIVED_SHOE_DATA:
      return {
        fetching: false,
        shoes: action.shoes,
        userId: 1,
      };
    default:
      return state;
  }
};

export default shoeReducer;
