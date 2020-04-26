import React from "react";
import cn from "classnames";

import Button from "@atlaskit/button";
import BookIcon from "@atlaskit/icon/glyph/trash";

const LoadItem = ({ loaders, removeLoader, currentLoader, onHold }) => {
  const deleteLoader = (n) => {
    const i = loaders.findIndex((y) => y.id === n);
    removeLoader(loaders, i);
  };

  return (
    <div>
      {(loaders || []).map((x) => {
        let blinking = currentLoader === x.name;
        let paused = blinking && onHold;
        return (
          <ul key={x.id} className="table-unit">
            <li className={cn({ blinking })}>{x.name}</li>
            {paused ? <li className="paused">PAUSED</li> : <li>{x.delay}</li>}
            <li>
              <Button onClick={() => deleteLoader(x.id)}>
                <BookIcon />
              </Button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default LoadItem;
