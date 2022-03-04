import {IMovie} from "../../../models/IMovie";
import {IMedia} from "../../../models/IMedia";
import {ITvSeries} from "../../../models/ITvSeries";


export interface sliderMediaState {
    sliderMedia: IMedia[],
    isSliderMediaLoading: boolean,
    sliderMediaError: string | null
}


export enum sliderMediaActionsType {
    SET_MOVIES = 'SLIDER_MEIDA/SET_MOVIES',
    SET_TV_SERIES = 'SLIDER_MEIDA/SET_TV_SERIES',
    SET_IS_LOADING = 'SLIDER_MEIDA/SET_IS_LOADING',
    SET_ERROR = 'SLIDER_MEIDA/SET_ERROR',
}

export interface setMovies {
    type: sliderMediaActionsType.SET_MOVIES,
    payload: IMovie[]
}

export interface setTvSeries {
    type: sliderMediaActionsType.SET_TV_SERIES,
    payload: ITvSeries[]
}

export interface setMoviesError {
    type: sliderMediaActionsType.SET_ERROR,
    payload: string | null
}

export interface setMoviesIsLoading {
    type: sliderMediaActionsType.SET_IS_LOADING,
    payload: boolean
}

export type sliderMediaActions = setMovies
                                 | setMoviesError
                                 | setMoviesIsLoading
                                 | setTvSeries
