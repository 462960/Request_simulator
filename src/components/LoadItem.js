import React from "react";

import Button from "@atlaskit/button";
import BookIcon from "@atlaskit/icon/glyph/trash";

const LoadItem = ({ loaders, removeLoader }) => {
  const deleteLoader = (n) => {
    const i = loaders.findIndex((y) => y.id === n);
    removeLoader(loaders, i);
  };

  return (
    <div>
      {(loaders || []).map((x) => (
        <ul key={x.id} className="table-unit">
          <li>{x.name}</li>
          <li>{x.delay}</li>
          <li>
            <Button onClick={() => deleteLoader(x.id)}>
              <BookIcon />
            </Button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default LoadItem;
