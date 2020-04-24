import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { loaderReducer } from "./reducers/loaderReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ loaderReducer });

export const store = createStore(rootReducer, composeWithDevTools());
