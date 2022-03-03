import React, {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import './MoviePreview.scss'
import {IMovie} from "../../../models/IMovie";
import mediaService from "../../../API/mediaService";
import {ITvSeries} from "../../../models/ITvSeries";

interface mediaPreviewBaseProps {
    item: IMovie | ITvSeries
}


const MediaPreviewBase: FC<mediaPreviewBaseProps> = ({item}) => {

    const poster_path: string = mediaService.URL_IMAGE+item.poster_path

   const navigate = useNavigate()
   function openMediaPage(){
      navigate(`/media/${item.type}/${item.id}`)
   }

    return (
      <div className='preview__container'>
          <div className="preview__img _ibg">
              <img src={poster_path} alt="img"/>
              <div className="_icon-play img-play" onClick={openMediaPage}></div>
          </div>
      </div>
   )
}

export default MediaPreviewBase