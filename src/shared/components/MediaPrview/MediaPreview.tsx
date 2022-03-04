import React, {FC} from 'react'

import {useNavigate} from 'react-router-dom'
import './MoviePreview.scss'
import {IMovie} from "../../../models/IMovie";
import mediaService from "../../../API/mediaService";
import MoviePreview from "./typeOfMediaPreview/MoviePreview";
import {ITvSeries} from "../../../models/ITvSeries";
import TvSeriesPreview from "./typeOfMediaPreview/TvSeriesPreview";
import {mediaTypes, IMedia} from "../../../models/IMedia";


interface mediaPreviewProps {
    item: IMedia,
}

const MediaPreview: FC<mediaPreviewProps> = ({item}) => {


   switch (item.type) {

       case mediaTypes.MOVIE:
           return <MoviePreview item={item as IMovie}/>

       case mediaTypes.TV_SERIES:
           return <TvSeriesPreview item={item as ITvSeries}/>

       default:
           return <></>
   }

}

export default MediaPreview