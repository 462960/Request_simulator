import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import Root from "./Root";
import { store } from "./store";

const wrap = (
  <Provider store={store}>
    <Root />
  </Provider>
);

ReactDOM.render(wrap, document.getElementById("root"));
