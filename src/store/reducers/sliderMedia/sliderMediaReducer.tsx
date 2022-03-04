import {IMedia, mediaTypes} from "../../../models/IMedia";
import {sliderMediaActions, sliderMediaActionsType, sliderMediaState} from "./types";

const initialState: sliderMediaState = {
    sliderMedia: [],
    isSliderMediaLoading: false,
    sliderMediaError: null,
}


export const sliderMediaReducer = (state = initialState, action: sliderMediaActions): sliderMediaState => {

    switch (action.type){

        case sliderMediaActionsType.SET_MOVIES: {
            const movies: IMedia[] = action.payload.map(item => {
                return {...item, type: mediaTypes.MOVIE}
            }) as IMedia[]

            return {...state, sliderMedia: movies}
            break;
        }

        case sliderMediaActionsType.SET_TV_SERIES: {
            const seriales: IMedia[] = action.payload.map(item => {
                return {...item, type: mediaTypes.TV_SERIES}
            }) as IMedia[]

            return {...state, sliderMedia: seriales}
            break;
        }

        case sliderMediaActionsType.SET_ERROR:
            return {...state, sliderMediaError: action.payload}
            break;

        case sliderMediaActionsType.SET_IS_LOADING:
            return {...state, isSliderMediaLoading: action.payload}
            break;

        default:
            return state

    }
}