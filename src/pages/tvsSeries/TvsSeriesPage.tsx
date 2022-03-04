import React from 'react'
import '../../styles/sass/style.scss'
import './TvsSeriesPage.scss'
import MediaPreviewSlider from "../../shared/components/Sliders/MediaPreviewSlider";
import {IMedia, mediaTypes} from "../../models/IMedia";
import {useAction} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import MediaContainer from "../../shared/components/MediaContainer/MediaContainer";


export default function TvsSeriesPage() {

    const {fetchPopularMedia, fetchTrendingMediaSlider} = useAction()
    const {media, isLoading} = useTypeSelector(i => i.media)
    const {sliderMedia, isSliderMediaLoading, sliderMediaError} = useTypeSelector(i => i.sliderMedia)

    React.useEffect(() => {
        fetchTrendingMediaSlider(1, mediaTypes.TV_SERIES)
        fetchPopularMedia(1, mediaTypes.TV_SERIES)
    },[])

   return (

      <div className='page__movies'>
         <div className="section__slider-now-paying">
             <MediaPreviewSlider items={sliderMedia as IMedia[]}
                                 isLoading={isSliderMediaLoading}/>
         </div>

         <div className="section__media-list media-list">
             <div className="media-list__filters">

                
             </div>
             <div className="media-list__list">
                 <MediaContainer items={media}
                                 isItemsLoading={isLoading}/>
                <div className="media-list__pagination">

                </div>
             </div>
         </div>
      </div>

   )
}