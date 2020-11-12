import { createStore, compose, applyMiddleware } from "redux";
import { reducersContact } from "../reducers/reducersContact";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducersContact,
  composeEnhancers(applyMiddleware(thunk))
);
