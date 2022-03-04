import React, { useMemo } from 'react';
import {useParams} from 'react-router-dom'
import useFetching from '../../hooks/useFetching';
import TailSpinLoader from '../../shared/components/Loaders/TailSpinLoader';
import Player from '../../shared/components/Player/Player';
import Dalay from '../../utils/Dalay';
import SomeFunc from '../../utils/SomeFunc';
import './MediaPage.scss'
import mediaService from "../../API/mediaService";
import {IMovie} from "../../models/IMovie";
import {ITvSeries} from "../../models/ITvSeries";
import {mediaTypes, IMedia} from "../../models/IMedia";
import MoviePage from "./mediaPages/MoviePage";
import TvSeriesPage from "./mediaPages/TvSeriesPage";

type MediaParams = {
    id: string
    type: string | undefined
}

export default function MediaPage() {

   const params = useParams<MediaParams>()

   const [media, setMedia] = React.useState<IMedia>({} as IMedia)
   const [fetchMedia, isLoadingMedia, errorMediaValue] = useFetching(async () => {
      const response = await mediaService.getMediaById(Number(params.id), params.type)
      await Dalay.wait(1)
      setMedia(response.data)
   })

   React.useEffect(() => {
      fetchMedia()
   },[params])



    switch (params.type) {

        case mediaTypes.MOVIE:
            return <MoviePage movie={media as IMovie}
                              isLoadingMovie={isLoadingMedia}/>

        case mediaTypes.TV_SERIES:
            return <TvSeriesPage tv_series={media as ITvSeries}
                                 isLoadingTvSeries={isLoadingMedia}/>

       default:
            return <></>
    }
}
