import React, {FC} from 'react';

import './MainPage.scss'
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import MediaContainer from "../../shared/components/MediaContainer/MediaContainer";
import MediaPreviewSlider from "../../shared/components/Sliders/MediaPreviewSlider";
import {mediaTypes, IMedia} from "../../models/IMedia";

const MainPage:FC = () => {

  const {media, page, error, isLoading} = useTypeSelector(i => i.media)
  const {fetchPopularMedia} = useAction()

  React.useEffect(() => {
    fetchPopularMedia(1, mediaTypes.MOVIE)
  },[])

  return(
    <>
      <MediaPreviewSlider items={media}
                          isLoading={isLoading}/>

      <MediaContainer items={media}
                      title={"Сегодняшние тренды фильмов"}
                      isItemsLoading={isLoading}/>
    </>
  )
}

export default MainPage
