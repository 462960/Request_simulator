import { v4 } from "uuid";

import { ADD_LOADER, REMOVE_LOADER } from "./constants";

export function addLoader(name, delay) {
  return {
    type: ADD_LOADER,
    id: v4(),
    name,
    delay,
  };
}

export function removeLoader(loaders, i) {
  return {
    type: REMOVE_LOADER,
    loaders,
    i,
  };
}
