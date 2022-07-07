
export enum FilterMovie {
    FILTERED = 'MOVIE/FILTERED',
    POPULAR = 'MOVIE/POPULAR',
    UPCOMING = 'MOVIE/UPCOMING',
    NOW_PlAYING = 'MOVIE/NOW_PlAYING',
    TOP_RATED = 'MOVIE/TOP_RATED'
}

export enum FilterTvSeries {
    FILTERED = 'TV/FILTERED',
    POPULAR = 'TV/POPULAR',
    TOP_RATED = 'TV/TOP_RATED',
    ON_THE_AIR = 'TV/ON_THE_AIR',
    AIRING_TODAY = 'TV/AIRING_TODAY'
}

export interface ITypeOfFilterMovie {
    name: string,
    type: FilterMovie
}

export interface ITypeOfFilterTvSeries {
    name: string,
    type: FilterTvSeries
}

export const typesOfFilterMovie: ITypeOfFilterMovie[] = [{name:"Фильтр", type: FilterMovie.FILTERED },
                                                         {name:"Популярные", type: FilterMovie.POPULAR },
                                                         {name:"В ожидании", type: FilterMovie.UPCOMING},
                                                         {name:"Сейчас смотрят", type: FilterMovie.NOW_PlAYING},
                                                         {name:"Лутшие", type: FilterMovie.TOP_RATED }]

export const typesOfFilterTvSeries: ITypeOfFilterTvSeries[] = [{name:"Фильтр", type: FilterTvSeries.FILTERED },
                                                               {name:"Популярные", type: FilterTvSeries.POPULAR },
                                                               {name:"В ефире сегодня", type: FilterTvSeries.AIRING_TODAY},
                                                               {name:"По телевидению", type: FilterTvSeries.ON_THE_AIR},
                                                               {name:"Лутшие", type: FilterTvSeries.TOP_RATED }]



export type typeOfFilterMedia = ITypeOfFilterMovie | ITypeOfFilterTvSeries