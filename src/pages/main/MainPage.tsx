import React, {FC} from 'react';

import './MainPage.scss'
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import MediaContainer from "../../shared/components/MediaContainer/MediaContainer";
import MediaPreviewSlider from "../../shared/components/Sliders/MediaPreviewSlider";
import {mediaTypes, IMediaType} from "../../models/IMedia";

const MainPage:FC = () => {

  const {movies, page, error, isLoading} = useTypeSelector(i => i.movie)
  const {fetchMovies} = useAction()

  React.useEffect(() => {
    fetchMovies(1, mediaTypes.MOVIE)
  },[])

  return(
    <>
      <MediaPreviewSlider items={movies}
                          isLoading={isLoading}/>

      <MediaContainer items={movies as IMediaType[]}
                      title={"Сегодняшние тренды фильмов"}
                      isItemsLoading={isLoading}/>
    </>
  )
}

export default MainPage
