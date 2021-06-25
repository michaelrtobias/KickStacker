import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index.jsx";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store.js";

import { handleShoeData } from "./redux/shoeSlice.js";

store.dispatch(handleShoeData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
