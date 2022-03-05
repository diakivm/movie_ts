import React, {FC} from 'react';

import './MainPage.scss'
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import MediaContainer from "../../shared/components/MediaContainer/MediaContainer";
import MediaPreviewSlider from "../../shared/components/Sliders/MediaPreviewSlider";
import {mediaTypes} from "../../models/IMedia";

const MainPage:FC = () => {

  const {media, isLoading} = useTypeSelector(i => i.media)
  const {sliderMedia, isSliderMediaLoading} = useTypeSelector(i => i.sliderMedia)

  const {fetchMixedMedia, fetchTrendingMediaSlider} = useAction()

  React.useEffect(() => {
    fetchMixedMedia(1)
    fetchTrendingMediaSlider(2, mediaTypes.MOVIE)
  },[])

  return(
    <>
      <MediaPreviewSlider items={sliderMedia.sort(() => 0.5 - Math.random())}
                          isLoading={isSliderMediaLoading}/>

      <MediaContainer items={media.sort(() => 0.5 - Math.random())}
                      title={"Сегодняшние тренды"}
                      isItemsLoading={isLoading}/>
    </>
  )
}

export default MainPage
