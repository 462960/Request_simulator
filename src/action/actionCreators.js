import { v4 } from "uuid";

import { ADD_LOADER, REMOVE_LOADER } from "./constants";

export function addLoader(name, duration) {
  return {
    type: ADD_LOADER,
    id: v4(),
    name,
    duration,
  };
}

export function removeLoader(loaders, i) {
  return {
    type: REMOVE_LOADER,
    loaders,
    i,
  };
}
