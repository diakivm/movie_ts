import {Dispatch} from "react";
import {
    setMovies,
    movieActions,
    movieActionsType,
    setMoviesError,
    setMoviesIsLoading,
    setMoviesPage, setTotalPages
} from "./types";
import {IMovie} from "../../../models/IMovie";
import mediaService from "../../../API/mediaService";
import Dalay from "../../../utils/Dalay";
import {mediaTypes} from "../../../models/IMedia";


const setMoviesAction = (movie: IMovie[]): setMovies => {
    return {
        type: movieActionsType.FETCH_MOVIES,
        payload: movie
    }
}
const setIsLoadingAction = (isLoading: boolean): setMoviesIsLoading => {
    return {
        type: movieActionsType.SET_IS_LOADING,
        payload: isLoading
    }
}
const setErrorAction = (error: string): setMoviesError => {
    return {
        type: movieActionsType.SET_ERROR,
        payload: error
    }
}
const setPageAction = (page: number): setMoviesPage  => {
    return {
        type: movieActionsType.SET_PAGE,
        payload: page
    }
}
const setTotalPagesAction = (pages: number): setTotalPages  => {
    return {
        type: movieActionsType.SET_TOTAL_PAGES,
        payload: pages
    }
}

export function fetchMovies(page: number, mediaType: mediaTypes){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(setIsLoadingAction(true))
            const response = await mediaService.getPopularMedia(page, mediaType)
            dispatch(setMoviesAction(response.data.results))
            dispatch(setTotalPagesAction(response.data.total_pages))
            await Dalay.wait(2)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}