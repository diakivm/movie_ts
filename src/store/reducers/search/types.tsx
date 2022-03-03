import {IMovie} from "../../../models/IMovie";
import {ITvSeries} from "../../../models/ITvSeries";
import {movieActionsType} from "../movie/types";


export interface searchState {
    movies: IMovie[],
    tv_series: ITvSeries[],
    total_count: number
    isLoading: boolean,
    error: string | null,
}

export enum searchActionsType {
    SET_MOVIES = 'SEARCH/SET_MOVIES',
    SET_TV_SERIES = 'SEARCH/SET_TV_SERIES',
    SET_IS_LOADING = 'SEARCH/SET_IS_LOADING',
    SET_ERROR = 'SEARCH/SET_ERROR',
}

export interface setSearchMovies {
    type: searchActionsType.SET_MOVIES,
    payload: IMovie[]
}

export interface setSearchTvSeries {
    type: searchActionsType.SET_TV_SERIES,
    payload: ITvSeries[]
}

export interface setSearchIsLoading {
    type: searchActionsType.SET_IS_LOADING,
    payload: boolean
}

export interface setSearchError {
    type: searchActionsType.SET_ERROR,
    payload: string | null
}

export type searchActions = setSearchMovies | setSearchTvSeries | setSearchError | setSearchIsLoading

