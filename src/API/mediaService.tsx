import axios from 'axios'
import {ITrailerInfo} from "../models/ITrailerInfo";
import {IMediaResponse, mediaType, mediaTypes} from "../models/IMedia";

const _defaultLanguange = "ru-RU"
const API_KEY = '61535d35d8f1f0f5cd6bcb40fd8046f6'

export default class mediaService {

    static URL_IMAGE: string = `https://image.tmdb.org/t/p/w500/`

    static async getPopularMedia(_page: number = 1, type: mediaTypes) {
        const response = await axios.get<IMediaResponse>(`https://api.themoviedb.org/3/${type}/popular?api_key=${API_KEY}`, {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }

    static async getTopRatedMedia(_page: number = 1, type: mediaTypes) {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${API_KEY}`, {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }

    static async getNowPlayingMovie(_page: number = 1,) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`, {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }

    static async getUpcomingMovie(_page: number = 1,) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`, {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }

    static async getAiringTodayTV(_page: number = 1,) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`, {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }

    static async getOnTheAirTV(_page: number = 1,) {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`, {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }

    static async getTrending(_page: number = 1, type: mediaTypes, time_window: string = 'day') {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/${time_window}?api_key=${API_KEY}`, {
            params: {
                page: _page,
                language: _defaultLanguange,
            }
        })
        return response
    }


    //======================================================================================================================

    static async getMediaGenres(type: mediaTypes) {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}`, {
            params: {
                language: _defaultLanguange,
            }
        })
        return response
    }

    // static async getDiscoverMedia(_page: number, _genres: string, _voteFilter: number, _raitingFilter, _yearFilter, _type='media') {
    //     const response = await axios.get(`https://api.themoviedb.org/3/discover/${_type}?api_key=${API_KEY}`, {
    //         params: {
    //             page: _page,
    //             language: _defaultLanguange,
    //             with_genres: _genres,
    //             'vote_count.gte': _voteFilter,
    //             'vote_average.gte': _raitingFilter[0,0],
    //             'vote_average.lte': _raitingFilter[0,1],
    //             'primary_release_date.gte': new Date(_yearFilter[0,0],0,1),
    //             'primary_release_date.lte': new Date(_yearFilter[0,1],0,1),
    //         }
    //     })
    //     return response
    // }

    //======================================================================================================================



    static async getMediaTrailer(id: number, type: mediaType) {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`, {
            params: {
                language: _defaultLanguange
            }
        })
        return response
    }

    static async getById(id: number) {
        const response = await axios.get(`https://api.themoviedb.org/3/find/${id}?api_key=${API_KEY}`, {
            params: {
                language: _defaultLanguange
            }
        })
        return response
    }

    static async getMediaByTitle(title: string, type: mediaTypes) {
        const response = await axios.get<IMediaResponse>(`https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&external_source=imdb_id`, {
            params: {
                language: _defaultLanguange,
                query: title
            }
        })
        return response
    }

    static async getMediaById(id: number | undefined, type: string = mediaTypes.MOVIE) {
        const response = axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`, {
            params: {
                language: _defaultLanguange
            }
        })
        return response
    }
}