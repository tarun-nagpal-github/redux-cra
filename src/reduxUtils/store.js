import { createStore, compose, combineReducers } from "redux";
import exampleReducer from "./reducers/example";

const mainReducer = combineReducers({
  example: exampleReducer
});

const store = createStore(
  mainReducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
