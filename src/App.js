import React, { useState } from "react";
import "./App.scss";
import cn from "classnames";

import Spinner from "@atlaskit/spinner";

import TopBar from "./components/TopBar";
import InputModule from "./components/InputModule";
import LoadItem from "./components/LoadItem";
import RunStop from "./components/RunStop";

function App() {
  const [freeze, toggleFreeze] = useState(true);

  return (
    <div className="App">
      <TopBar />

      <div className="wrapper">
        <div className="table-container">
          <ul className="table-unit">
            <li>Request name</li>
            <li>Delay (sec)</li>
            <li></li>
          </ul>
          <InputModule />
          <LoadItem />
          <RunStop />
        </div>
        <div className="spinner-container">
          <span className={cn({ freeze })}>
            <Spinner size="xlarge" isCompleting={false} />
          </span>
          <span>Loder first</span>
          <span>1 sec left</span>
        </div>
      </div>
    </div>
  );
}

export default App;
