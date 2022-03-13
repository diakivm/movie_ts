import React from "react";
import MainPage from "../pages/main/MainPage";
import MediaPage from "../pages/media/MediaPage";
import SearchPage from "../pages/search/SearchPage";
import MoviePage from "../pages/media/mediaPages/MoviePage";
import MoviesPage from "../pages/movies/MoviesPage";
import TvSeriesPage from "../pages/media/mediaPages/TvSeriesPage";
import TvsSeriesPage from "../pages/tvsSeries/TvsSeriesPage";


interface IRoute {
    path: routeNames,
    element: React.ComponentType | React.ReactNode
}

export enum routeNames {
    SEARCH = '/search/:searchQuery',
    TV_SERIES = '/tv-series',
    MOVIES = '/movies',
    MEDIA = '/media/:type/:id',
    MAIN = 'movie_ts/'
}

export const publicRoutes: IRoute[] = [
    {
        path: routeNames.MAIN,
        element: <MainPage/>
    },
    {
        path: routeNames.MOVIES,
        element: <MoviesPage/>
    },
    {
        path: routeNames.TV_SERIES,
        element: <TvsSeriesPage/>
    },
    {
        path: routeNames.MEDIA,
        element: <MediaPage/>
    },
    {
        path: routeNames.SEARCH,
        element: <SearchPage/>
    }
]