import React, {FC} from 'react';

import './MainPage.scss'
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import MediaContainer from "../../shared/components/MediaContainer/MediaContainer";
import MediaPreviewSlider from "../../shared/components/Sliders/MediaPreviewSlider";
import {mediaType, mediaTypes} from "../../models/IMedia";
import Button from "../../shared/UI/Button/Button";
import LoaderOfMedia from "../../shared/components/LoaderOfMedia/LoaderOfMedia";

const MainPage:FC = () => {

  const {media, isLoading} = useTypeSelector(i => i.media)
  const {sliderMedia, isSliderMediaLoading} = useTypeSelector(i => i.sliderMedia)

  const [currentPages, setCurrentPages] = React.useState({movieCurrentPage: 1, tvCurrentPage: 1})

  const {fetchPopularMediaWithoutReset, fetchTrendingMediaSlider, resetAllMedia} = useAction()

  React.useEffect(() => {
      fetchTrendingMediaSlider(2, mediaTypes.MOVIE)
      resetAllMedia()
  },[])

    React.useEffect(() => {
        fetchPopularMediaWithoutReset(currentPages.movieCurrentPage, mediaTypes.MOVIE)
    }, [currentPages.movieCurrentPage])

    React.useEffect(() => {
        fetchPopularMediaWithoutReset(currentPages.tvCurrentPage, mediaTypes.TV_SERIES)
    }, [currentPages.tvCurrentPage])


    function changePage(type: mediaType) {
      switch (type) {
          case mediaTypes.MOVIE:
              setCurrentPages({...currentPages, movieCurrentPage: currentPages.movieCurrentPage+1})
              break;
          case mediaTypes.TV_SERIES:
              setCurrentPages({...currentPages, tvCurrentPage: currentPages.tvCurrentPage+1})
              break;
      }
    }

  return(
    <>
      <MediaPreviewSlider items={sliderMedia}
                          isLoading={isSliderMediaLoading}/>


        <LoaderOfMedia items={media.filter(item => item.type !== mediaTypes.TV_SERIES)}
                       title={"Сегодняшние фильми"}
                       isLoadingMedia={isLoading}
                       onClickButton={() => changePage(mediaTypes.MOVIE)}/>

        <LoaderOfMedia items={media.filter(item => item.type !== mediaTypes.MOVIE)}
                       title={"Сегодняшние сериали"}
                       isLoadingMedia={isLoading}
                       onClickButton={() => changePage(mediaTypes.TV_SERIES)}/>
    </>
  )
}

export default MainPage
