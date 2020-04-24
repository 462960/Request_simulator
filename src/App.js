import React from "react";
import "./App.scss";

import Spinner from "@atlaskit/spinner";

import TopBar from "./components/TopBar";
import InputModule from "./components/InputModule";
import LoadItem from "./components/LoadItem";
import RunStop from "./components/RunStop";

function App() {
  return (
    <div className="App">
      <TopBar />

      <div className="container">
        <ul className="table-unit">
          <li>Request name</li>
          <li>Delay (sec)</li>
          <li></li>
        </ul>
        <InputModule />
        <LoadItem />
        <RunStop />
      </div>
    </div>
  );
}

export default App;
