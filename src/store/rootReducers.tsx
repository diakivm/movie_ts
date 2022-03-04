import {combineReducers} from "redux";
import {mediaReducer} from "./reducers/media/mediaReducer";
import {searchReducer} from "./reducers/search/searchReducer";
import {sliderMediaReducer} from "./reducers/sliderMedia/sliderMediaReducer";

export const rootReducers = combineReducers({
    media: mediaReducer,
    search: searchReducer,
    sliderMedia: sliderMediaReducer,
})

export type rootState = ReturnType<typeof rootReducers>