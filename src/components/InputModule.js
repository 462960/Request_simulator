import React from "react";

import Textfield from "@atlaskit/textfield";
import DropdownMenu, {
  DropdownItemGroup,
  DropdownItem,
  DropdownMenuStateless,
} from "@atlaskit/dropdown-menu";
import Button, { ButtonGroup } from "@atlaskit/button";

const InputModule = () => {
  // return <Textfield />;
  return (
    <ul className="table-unit">
      <li>
        <Textfield />
      </li>
      <li>
        {" "}
        <DropdownMenu
          trigger="Choices"
          triggerType="button"
          onOpenChange={(e) => console.log("dropdown opened", e)}
        >
          <DropdownItemGroup>
            <DropdownItem>Sydney</DropdownItem>
            <DropdownItem>Melbourne</DropdownItem>
          </DropdownItemGroup>
        </DropdownMenu>
      </li>
      <li>
        <Button>Add</Button>
      </li>
    </ul>
  );
};

export default InputModule;
