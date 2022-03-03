import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducers} from "./rootReducers";

export const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
))
