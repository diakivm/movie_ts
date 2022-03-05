import {Dispatch} from "react";
import {
    movieActions,
    movieActionsType,
    resetMedia,
    setMovies,
    setMoviesError,
    setMoviesIsLoading,
    setMoviesPage,
    setTotalPages,
    setTvSeries
} from "./types";
import {IMovie} from "../../../models/IMovie";
import mediaService from "../../../API/mediaService";
import Dalay from "../../../utils/Dalay";
import {mediaType, mediaTypes} from "../../../models/IMedia";
import {ITvSeries} from "../../../models/ITvSeries";
import {IGenre} from "../../../models/IGenre";


const setMoviesAction = (movie: IMovie[]): setMovies => {
    return {
        type: movieActionsType.SET_MOVIES,
        payload: movie
    }
}
const setTvSeriesAction = (tvSeries: ITvSeries[]): setTvSeries => {
    return {
        type: movieActionsType.SET_TV_SERIES,
        payload: tvSeries
    }
}
const resetMediaAction = (): resetMedia => {
    return {
        type: movieActionsType.RESET_MEDIA,
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


//Media Actions

export function fetchPopularMedia(page: number, mediaType: mediaTypes){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(resetMediaAction())
            dispatch(setIsLoadingAction(true))
            const response = await mediaService.getPopularMedia(page, mediaType)
              switch (mediaType) {
                  case mediaTypes.MOVIE:
                      dispatch(setMoviesAction(response.data.results))
                      break;
                  case mediaTypes.TV_SERIES:
                      dispatch(setTvSeriesAction(response.data.results))
                      break;
                  default:
                      dispatch(resetMediaAction())
              }
            dispatch(setTotalPagesAction(response.data.total_pages))
            dispatch(setPageAction(response.data.page))
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function fetchTopRatedMedia(page: number, mediaType: mediaTypes){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(resetMediaAction())
            dispatch(setIsLoadingAction(true))
            const response = await mediaService.getTopRatedMedia(page, mediaType)
            switch (mediaType) {
                case mediaTypes.MOVIE:
                    dispatch(setMoviesAction(response.data.results))
                    break;
                case mediaTypes.TV_SERIES:
                    dispatch(setTvSeriesAction(response.data.results))
                    break;
                default:
                    dispatch(resetMediaAction())
            }
            dispatch(setTotalPagesAction(response.data.total_pages))
            dispatch(setPageAction(response.data.page))
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function fetchDiscoverMedia(page: number,
                                   genres: IGenre[],
                                   voteFilter: number,
                                   raitingFilter: [number, number],
                                   yearFilter: [number, number],
                                   mediaType: mediaType){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(resetMediaAction())
            dispatch(setIsLoadingAction(true))
            const genresString = genres.map(item => item.id).join(',')
            const response = await mediaService.getDiscoverMedia(page, genresString, voteFilter, raitingFilter, yearFilter, mediaType)
            switch (mediaType) {
                case mediaTypes.MOVIE:
                    dispatch(setMoviesAction(response.data.results))
                    break;
                case mediaTypes.TV_SERIES:
                    dispatch(setTvSeriesAction(response.data.results))
                    break;
                default:
                    dispatch(resetMediaAction())
            }
            dispatch(setTotalPagesAction(response.data.total_pages))
            dispatch(setPageAction(response.data.page))
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function fetchMixedMedia(page: number){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(resetMediaAction())
            dispatch(setIsLoadingAction(true))
            const responseTv = await mediaService.getPopularMedia(page, mediaTypes.TV_SERIES)
            const responseMovie = await mediaService.getPopularMedia(page, mediaTypes.MOVIE)
            dispatch(setMoviesAction(responseMovie.data.results))
            dispatch(setTvSeriesAction(responseTv.data.results))
            dispatch(setTotalPagesAction(1))
            dispatch(setPageAction(1))
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

//Movie Actions

export function fetchUpcomingMovie(page: number){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(resetMediaAction())
            dispatch(setIsLoadingAction(true))
                const response = await mediaService.getUpcomingMovie(page)
            dispatch(setMoviesAction(response.data.results))
            dispatch(setTotalPagesAction(response.data.total_pages))
            dispatch(setPageAction(response.data.page))
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function fetchNowPlayingMovie(page: number){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(resetMediaAction())
            dispatch(setIsLoadingAction(true))
                const response = await mediaService.getNowPlayingMovie(page)
            dispatch(setMoviesAction(response.data.results))
            dispatch(setTotalPagesAction(response.data.total_pages))
            dispatch(setPageAction(response.data.page))
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

//Tv Series Actions

export function fetchAiringTodayTvSeries(page: number){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(resetMediaAction())
            dispatch(setIsLoadingAction(true))
            const response = await mediaService.getAiringTodayTV(page)
            dispatch(setTvSeriesAction(response.data.results))
            dispatch(setTotalPagesAction(response.data.total_pages))
            dispatch(setPageAction(response.data.page))
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function fetchOnTheAirTvSeries(page: number){
    return async (dispatch: Dispatch<movieActions>) => {
        try {
            dispatch(resetMediaAction())
            dispatch(setIsLoadingAction(true))
            const response = await mediaService.getOnTheAirTV(page)
            dispatch(setTvSeriesAction(response.data.results))
            dispatch(setTotalPagesAction(response.data.total_pages))
            dispatch(setPageAction(response.data.page))
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

