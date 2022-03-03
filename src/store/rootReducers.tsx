import {combineReducers} from "redux";
import {movieReducer} from "./reducers/movie/movieReducer";
import {searchReducer} from "./reducers/search/searchReducer";

export const rootReducers = combineReducers({
    movie: movieReducer,
    search: searchReducer
})

export type rootState = ReturnType<typeof rootReducers>