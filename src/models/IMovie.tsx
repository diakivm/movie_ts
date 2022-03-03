import {IMediaDetails, mediaType} from "./IMedia";
import {ITvSeries} from "./ITvSeries";

export interface IMovie extends IMovieDetails {
    adult: boolean
    backdrop_path: string | null
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string | null
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}


interface IMovieDetails extends IMediaDetails {
    runtime: number | null
}
