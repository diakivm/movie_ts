import React, {FC} from 'react'
import './MediaContainer.scss'
import {IMovie} from "../../../models/IMovie";
import MediaPreview from "../MediaPrview/MediaPreview";
import Loaders from "../../../utils/Loaders";
import {ITvSeries} from "../../../models/ITvSeries";
import {IMedia} from "../../../models/IMedia";

interface MediaContainerProps {
    items: IMedia[],
    title?: string,
    isItemsLoading?: boolean
}

const MediaContainer: FC<MediaContainerProps> = ({ items, isItemsLoading = false, title}) => {

    let fakeArray = Loaders.getFakeMoviePreview(10, {width:"100%",
                                                                height:340,
                                                                speed:2,
                                                                backgroundColor:"rgba(60, 60, 60, 0.2)",
                                                                foregroundColor:"rgba(60, 60, 60, 0.3)"})

   return (
      <div className='movie'>
        <h2 className="movie__title">{title}</h2>
         <div className="movie__container">
            {
               isItemsLoading ?
                                fakeArray
                              : (
                                 items.length === 0 ?
                                                    <h4>Нет таких фильмов</h4>
                                                    :
                                                    items.map(item => {
                                                       return <MediaPreview key={item.id}
                                                                            item={item}/>
                                                    })
                              )
                              
            }
         </div>
      </div> 
   )
}

export default MediaContainer