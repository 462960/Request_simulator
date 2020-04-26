import React, { useState, useEffect } from "react";
import "./App.scss";
import cn from "classnames";

import Spinner from "@atlaskit/spinner";

import TopBar from "./components/TopBar";
import InputModule from "./components/InputModule";
import LoadItem from "./components/LoadItem";
import RunStop from "./components/RunStop";

function App({ loaders, addLoader, removeLoader }) {
  const [freeze, toggleFreeze] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [queue, setQueue] = useState([]);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState("");
  const [currentLoader, setCurrentLoader] = useState("");

  useEffect(() => {
    if (loaders.length >= 10) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setQueue([...loaders]);
  }, [loaders]);

  useEffect(() => {
    if (queue.length === 0 && counter === 0 && !freeze) {
      stopLoader();
      setQueue([...loaders]);
      setCurrentLoader("");
    } else if (queue.length !== 0 && counter === -1 && !freeze) {
      setUpCurrentLoader();
    }
  }, [counter, queue, freeze]);

  const setUpCurrentLoader = () => {
    const item = queue.shift();
    setCurrentLoader(item.name);
    setCounter(item.delay);
  };

  const runLoader = () => {
    if (freeze && queue.length !== 0 && counter === 0) {
      setUpCurrentLoader();
    }
    if (freeze) {
      toggleFreeze(false);
      const timerID = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
      setTimer(timerID);
    }
  };

  const stopLoader = () => {
    clearInterval(timer);
    toggleFreeze(true);
  };

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
          <InputModule addLoader={addLoader} disabled={disabled} />
          <LoadItem loaders={loaders} removeLoader={removeLoader} />
          <RunStop runLoader={runLoader} stopLoader={stopLoader} />
        </div>
        <div className="spinner-container">
          <span className={cn({ freeze })}>
            <Spinner size="xlarge" isCompleting={false} />
          </span>
          <span>{currentLoader}</span>
          <span>{counter} sec left</span>
        </div>
      </div>
    </div>
  );
}

export default App;
