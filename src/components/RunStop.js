import React from "react";

import Button from "@atlaskit/button";

const RunStop = ({ runLoader, stopLoader }) => {
  return (
    <ul className="table-unit">
      <li></li>
      <li>
        <Button onClick={runLoader}>Run</Button>
      </li>
      <li>
        <Button onClick={stopLoader}>Stop</Button>
      </li>
    </ul>
  );
};

export default RunStop;
