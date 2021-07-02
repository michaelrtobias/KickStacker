import { combineReducers } from "redux";

import shoeReducer from "./shoes/shoeSlice.js";
import formReducer from "./brands/brandsSlice.js";
import cutsReducer from "./cuts/cutsSlice.js";

const rootReducer = combineReducers({
  shoes: shoeReducer,
  brands: formReducer,
  cuts: cutsReducer,
});

export default rootReducer;
