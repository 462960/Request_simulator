import React from "react";

import loaders from "../helper";

const LoadItem = () => {
  return (
    <div>
      {(loaders || []).map((x) => (
        <ul key={x.id} className="table-unit">
          <li>{x.name}</li>
          <li>{x.delay}</li>
          <li></li>
        </ul>
      ))}
    </div>
  );
};

export default LoadItem;
