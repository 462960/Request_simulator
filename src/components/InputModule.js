import React, { useState } from "react";

import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";

const InputModule = ({ addLoader }) => {
  const [name, setName] = useState("");
  const [delay, setDelay] = useState(1);
  const [invalid, setInvalid] = useState(false);

  const setLoader = () => {
    !name && setInvalid(true);
    name && addLoader(name, delay);
    setTimeout(() => {
      setInvalid(false);
    }, 500);
    setName("");
    setDelay(1);
  };

  return (
    <ul className="table-unit">
      <li>
        <Textfield
          onChange={(e) => setName(e.target.value)}
          value={name}
          isInvalid={invalid}
        />
      </li>
      <li>
        <Textfield
          onChange={(e) => setDelay(e.target.value)}
          value={delay}
          type="number"
          min="1"
          max="10"
        />
      </li>
      <li>
        <Button onClick={setLoader}>Add</Button>
      </li>
    </ul>
  );
};

export default InputModule;
