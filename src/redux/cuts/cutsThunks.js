import store from "../store.js";
import axios from "axios";

const REQUESTING_CUTS_DATA = "FORM/REQUESTING_CUTS_DATA";
const RECEIVED_CUTS_DATA = "FORM/RECEIVED_CUTS_DATA";
const requestingData = () => {
  return { type: REQUESTING_CUTS_DATA };
};
const receivedData = (cuts) => {
  return { type: RECEIVED_CUTS_DATA, cuts: cuts.data };
};

export async function handleCutsData(dispatch, getState) {
  try {
    const state = getState();
    store.dispatch(requestingData());

    const response = await axios.get(
      "https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/cuts"
    );

    store.dispatch(receivedData(response));
  } catch (error) {
    throw error;
  }
}
