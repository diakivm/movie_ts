import {IMovie} from "./IMovie";
import {ITvSeries} from "./ITvSeries";

export enum mediaTypes {
    MOVIE = 'movie',
    TV_SERIES = 'tv'
}

export type mediaType = mediaTypes.MOVIE | mediaTypes.TV_SERIES


export interface IMediaDetails {
    genres: IGenres[]
    production_countries: IProductionCountries[]
    type: mediaType
}

interface IGenres {
    id: number
    name: string
}

interface IProductionCountries {
    name: string
}


//response

export interface IMediaResponse {
        page: number
        results: any[]
        total_pages: number
        total_results: number
}

// multiinterface

export interface IMediaType extends IMovie, ITvSeries {

}

