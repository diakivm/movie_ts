import {searchActions, searchActionsType, searchState} from "./types";
import {mediaTypes} from "../../../models/IMedia";


const initialState: searchState = {
    movies: [],
    tv_series: [],
    total_count: 0,
    error: null,
    isLoading: false
}


export const searchReducer = (state = initialState, action: searchActions): searchState => {
    switch (action.type) {

        case searchActionsType.SET_MOVIES:
            return {...state, movies: action.payload.map(item => {
                    return {...item, type: mediaTypes.MOVIE}
                })}
            break;
        case searchActionsType.SET_TV_SERIES:
            return {...state, tv_series: action.payload.map(item => {
                    return {...item, type: mediaTypes.TV_SERIES}
                })}
            break;
        case searchActionsType.SET_ERROR:
            return {...state, error: action.payload}
            break;
        case searchActionsType.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
            break;
        default:
            return state

    }
}