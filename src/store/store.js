import { data } from "./dataReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  data,
  composeWithDevTools(applyMiddleware(thunk))
);
