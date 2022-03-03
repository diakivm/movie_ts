import React from "react";
import MainPage from "../pages/main/MainPage";
import MediaPage from "../pages/media/MediaPage";
import SearchPage from "../pages/search/SearchPage";


interface IRoute {
    path: routeNames,
    element: React.ComponentType | React.ReactNode
}

export enum routeNames {
    SEARCH = '/search/:searchQuery',
    TV_SERIES = '/tv-series',
    MOVIES = '/movies',
    MEDIA = '/media/:type/:id',
    MAIN = '/'
}

export const publicRoutes: IRoute[] = [
    {
        path: routeNames.MAIN,
        element: <MainPage/>
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