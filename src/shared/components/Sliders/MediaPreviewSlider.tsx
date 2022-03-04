// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {FC} from 'react';
import { Navigation, A11y, Autoplay } from 'swiper';
import MoviePreviewBase from '../MediaPrview/MediaPreviewBase';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './MoviePreviewSlider.scss'
import {IMovie} from "../../../models/IMovie";
import Loaders from "../../../utils/Loaders";
import {IMedia} from "../../../models/IMedia";


interface MediaPreviewSliderProps {
    items: IMedia[],
    isLoading: boolean
}

const MediaPreviewSlider: FC<MediaPreviewSliderProps> = ({items, isLoading}) => {

  const fakeArray = Loaders.getFakeMoviePreviewBase(7, {width:"100%",
                                                                  height:"100%",
                                                                  speed:2,
                                                                  backgroundColor:"rgba(60, 60, 60, 0.2)",
                                                                  foregroundColor:"rgba(60, 60, 60, 0.3)"})

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={20}
      navigation
      loop={true}
      autoplay={{ delay: 3000 }}
      className={'films-slider'}
      breakpoints={{
         0:{
            slidesPerView: 3
         },
         540: {
            slidesPerView: 4,
          },
         767: {
           slidesPerView: 5,
         },
         // when window width is >= 768px
         991: {
           slidesPerView: 7,
         },
       }}
    >
      {
         isLoading ? 
                   fakeArray.map((item, index) => {
                    return <SwiperSlide key={index}
                                        className={'slide-preview-films'}>
                                {item}
                          </SwiperSlide>
                    }) 
                   :
                   items.map((item) => {
                   return <SwiperSlide key={item?.id}
                                       className={'slide-preview-films'}>
                               <MoviePreviewBase item={item}/>
                          </SwiperSlide>
                   })
      }
    </Swiper>
  )
}

export default MediaPreviewSlider