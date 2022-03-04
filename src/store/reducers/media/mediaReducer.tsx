import {movieActions, movieActionsType, mediaState} from "./types";
import {IMedia, mediaTypes} from "../../../models/IMedia";

const initialState: mediaState = {
    media: [],
    total_pages: 1,
    page: 1,
    isLoading: false,
    error: null,
}


export const mediaReducer = (state = initialState, action: movieActions): mediaState => {

    switch (action.type){

        case movieActionsType.SET_MOVIES: {
            const movies: IMedia[] = action.payload.map(item => {
                return {...item, type: mediaTypes.MOVIE}
            }) as IMedia[]

            return {...state, media: [...state.media, ...movies]}
            break;
        }

        case movieActionsType.SET_TV_SERIES: {
            const movies: IMedia[] = action.payload.map(item => {
                return {...item, type: mediaTypes.TV_SERIES}
            }) as IMedia[]

            return {...state, media: [...state.media, ...movies]}
            break;
        }

        case movieActionsType.RESET_MEDIA:
            return {...state, media: [], error: null, page:1, total_pages:1}
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