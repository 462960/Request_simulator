import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./store";

const wrap = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(wrap, document.getElementById("root"));
