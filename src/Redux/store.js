import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = legacy_createStore(
  reducer,
  compose(applyMiddleware(thunk), reduxDevTool)
);
