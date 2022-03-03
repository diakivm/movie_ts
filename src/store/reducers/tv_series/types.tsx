import {IMovie} from "../../../models/IMovie";


export interface tvSeriesState {
    movies: IMovie[],
    total_pages: number
    page: number,
    isLoading: boolean,
    error: string | null
}


export enum movieActionsType {
    FETCH_MOVIES = 'MOVIES/FETCH_MOVIES',
    SET_IS_LOADING = 'MOVIES/SET_IS_LOADING',
    SET_ERROR = 'MOVIES/SET_ERROR',
    SET_PAGE = 'MOVIES/SET_PAGE',
    SET_TOTAL_PAGES = 'MOVIES/SET_TOTAL_PAGES',
}

export interface setMovies {
    type: movieActionsType.FETCH_MOVIES,
    payload: IMovie[]
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

export type movieActions = setMovies | setMoviesError | setMoviesPage | setMoviesIsLoading | setTotalPages