import {movieActions, movieActionsType, movieState} from "./types";
import {mediaTypes} from "../../../models/IMedia";

const initialState: movieState = {
    movies: [],
    total_pages: 0,
    page: 1,
    isLoading: false,
    error: null,
}


export const tvSeriesReducer = (state = initialState, action: movieActions): movieState => {

    switch (action.type){

        case movieActionsType.FETCH_MOVIES:
            return {...state, movies: action.payload.map(item => {
                 return {...item, type: mediaTypes.MOVIE}
                })}
            break;
        case movieActionsType.SET_ERROR:
            return {...state, error: action.payload}
            break;
        case movieActionsType.SET_PAGE:
            return {...state, page: action.payload}
            break;
        case movieActionsType.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
            break;
        case movieActionsType.SET_TOTAL_PAGES:
            return {...state, total_pages: action.payload}
            break;
        default:
            return state

    }
}