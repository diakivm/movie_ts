import {IMovie} from "../../../models/IMovie";
import {IMedia} from "../../../models/IMedia";
import {ITvSeries} from "../../../models/ITvSeries";


export interface mediaState {
    media: IMedia[],
    total_pages: number
    page: number,
    isLoading: boolean,
    error: string | null
}


export enum movieActionsType {
    SET_MOVIES = 'MOVIES/SET_MOVIES',
    SET_TV_SERIES = 'MOVIES/SET_TV_SERIES',
    SET_IS_LOADING = 'MOVIES/SET_IS_LOADING',
    RESET_MEDIA = 'MOVIES/RESET_MEDIA',
    SET_ERROR = 'MOVIES/SET_ERROR',
    SET_PAGE = 'MOVIES/SET_PAGE',
    SET_TOTAL_PAGES = 'MOVIES/SET_TOTAL_PAGES',
}

export interface setMovies {
    type: movieActionsType.SET_MOVIES,
    payload: IMovie[]
}

export interface setTvSeries {
    type: movieActionsType.SET_TV_SERIES,
    payload: ITvSeries[]
}

export interface resetMedia {
    type: movieActionsType.RESET_MEDIA,
}

export interface setMoviesError {
    type: movieActionsType.SET_ERROR,
    payload: string | null
}

export interface setMoviesPage {
    type: movieActionsType.SET_PAGE,
    payload: number
}

export interface setMoviesIsLoading {
    type: movieActionsType.SET_IS_LOADING,
    payload: boolean
}

export interface setTotalPages {
    type: movieActionsType.SET_TOTAL_PAGES,
    payload: number
}

export type movieActions = setMovies
                         | setMoviesError
                         | setMoviesPage
                         | setMoviesIsLoading
                         | setTotalPages
                         | setTvSeries
                         | resetMedia