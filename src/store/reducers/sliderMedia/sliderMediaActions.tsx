import {Dispatch} from "react";
import {IMovie} from "../../../models/IMovie";
import mediaService from "../../../API/mediaService";
import Dalay from "../../../utils/Dalay";
import {mediaTypes} from "../../../models/IMedia";
import {ITvSeries} from "../../../models/ITvSeries";
import {
    setMovies,
    setMoviesError,
    setMoviesIsLoading,
    setTvSeries,
    sliderMediaActions,
    sliderMediaActionsType
} from "./types";


const setMoviesAction = (movie: IMovie[]): setMovies => {
    return {
        type: sliderMediaActionsType.SET_MOVIES,
        payload: movie
    }
}

const setTvSeriesAction = (tvSeries: ITvSeries[]): setTvSeries => {
    return {
        type: sliderMediaActionsType.SET_TV_SERIES,
        payload: tvSeries
    }
}


const setIsLoadingAction = (isLoading: boolean): setMoviesIsLoading => {
    return {
        type: sliderMediaActionsType.SET_IS_LOADING,
        payload: isLoading
    }
}

const setErrorAction = (error: string): setMoviesError => {
    return {
        type: sliderMediaActionsType.SET_ERROR,
        payload: error
    }
}

export function fetchTrendingMediaSlider(page: number = 1, mediaType: mediaTypes){
    return async (dispatch: Dispatch<sliderMediaActions>) => {
        try {
            dispatch(setIsLoadingAction(true))
            const response = await mediaService.getTrending(page, mediaType)
            switch (mediaType) {
                case mediaTypes.MOVIE:
                    dispatch(setMoviesAction(response.data.results))
                    break;
                case mediaTypes.TV_SERIES:
                    dispatch(setTvSeriesAction(response.data.results))
                    break;
                default:
                    break;
            }
            await Dalay.wait(1)
        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}