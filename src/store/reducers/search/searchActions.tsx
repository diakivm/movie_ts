import {IMovie} from "../../../models/IMovie";
import {
    searchActions,
    searchActionsType,
    setSearchError,
    setSearchIsLoading,
    setSearchMovies,
    setSearchTvSeries
} from "./types";
import {ITvSeries} from "../../../models/ITvSeries";
import {Dispatch} from "react";
import mediaService from "../../../API/mediaService";
import {mediaTypes} from "../../../models/IMedia";


const setMoviesSearchAction = (movie: IMovie[]): setSearchMovies  => {
    return {
        type: searchActionsType.SET_MOVIES,
        payload: movie
    }
}
const setTvSeriesSearchAction = (tvSeries: ITvSeries[]): setSearchTvSeries  => {
    return {
        type: searchActionsType.SET_TV_SERIES,
        payload: tvSeries
    }
}
const setIsLoadingSearchAction = (isLoading: boolean): setSearchIsLoading => {
    return {
        type: searchActionsType.SET_IS_LOADING,
        payload: isLoading
    }
}
const setErrorSearchAction = (error: string | null): setSearchError => {
    return {
        type: searchActionsType.SET_ERROR,
        payload: error
    }
}


export const doSearch = (title: string | undefined = '') => {
    return async (dispatch: Dispatch<searchActions>) => {
        try {
            dispatch(setErrorSearchAction(null))
            dispatch(setIsLoadingSearchAction(true))

            const movieResponse = await mediaService.getMediaByTitle(title, mediaTypes.MOVIE)
            dispatch(setMoviesSearchAction(movieResponse.data.results))
            const tvSeriesResponse = await mediaService.getMediaByTitle(title, mediaTypes.TV_SERIES)
            dispatch(setTvSeriesSearchAction(tvSeriesResponse.data.results))

        } catch (e: any){
            dispatch(setErrorSearchAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingSearchAction(false))
        }
    }
}