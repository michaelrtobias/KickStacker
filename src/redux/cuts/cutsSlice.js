const REQUESTING_CUTS_DATA = "FORM/REQUESTING_CUTS_DATA";
const RECEIVED_CUTS_DATA = "FORM/RECEIVED_CUTS_DATA";

const initialCutsState = {
  fetching: false,
  cuts: [],
};

const cutsReducer = (state = initialCutsState, action) => {
  switch (action.type) {
    case REQUESTING_CUTS_DATA:
      return {
        fetching: true,
        cuts: [],
      };
    case RECEIVED_CUTS_DATA:
      return {
        fetching: false,
        cuts: action.cuts,
      };
    default:
      return state;
  }
};

export default cutsReducer;
