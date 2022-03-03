import React from 'react'
import '../../styles/sass/style.scss'
import './ContentPage.scss'
import MediaContainer from '../../shared/components/MediaContainer/MediaContainer'
import MovieContext from '../../context/MovieContext'
import PaginationList from '../../shared/components/Pagination/PaginationList'
import Loaders from '../../utils/Loaders'
import MoviePreviewSlider from '../../shared/components/Sliders/MediaPreviewSlider'
import TypeOfMediaFilters from './filters/TypeOfMediaFilters'
import useFetching from '../../hooks/useFetching'
import MediaFilters from './filters/MediaFilters'


export default function ContentPage({type='movie', sliderMedia, isSliderMediaLoading}) {

  //#region media
  const [media, setMedia] = React.useState([])
  const [filterMedia, setFilterMedia] = React.useState({name: "Популярные", type: "popular"})
  const [mediaPagination, setMediaPagination] = React.useState({currentPage:1, totalPages: 500})

  const [fetchMedia, isMediaLoading, errorValueMovies] = useFetching(async() => {

    let response = {}

        switch (filterMedia.type) {
          case 'now-palying':
            response = await MediaService.getNowPlayingMovie(mediaPagination.currentPage)
          break;

          case 'popular':
            response = await MediaService.getPopularMedia(mediaPagination.currentPage, type)
          break;

          case 'top-rated':
            response = await MediaService.getTopRatedMedia(mediaPagination.currentPage, type)
          break;

          case 'upcoming':
            response = await MediaService.getUpcomingMovie(mediaPagination.currentPage)
          break;

          case 'on-the-air':
            response = await MediaService.getOnTheAirTV(mediaPagination.currentPage)
          break;

          case 'airing-today':
            response = await MediaService.getAiringTodayTV(mediaPagination.currentPage)
          break;

          default:
            break;
        }
        setMedia(response.data.results)

                  if(response.data.total_pages >= 500){
                    setMediaPagination({...mediaPagination, totalPages: 500})
                  } else {
                    setMediaPagination({...mediaPagination, totalPages: response.data.total_pages})
                  }
  })

  React.useEffect(()=>{
    fetchMedia()
  },[mediaPagination.currentPage, filterMedia, type])

  //#endregion                 
                                           
  //#region other

    let fakeArray = Loaders.getFakeMoviePreview(10, {width:"100%", 
                                                     height:340,
                                                     speed:2,
                                                     backgroundColor:"rgba(60, 60, 60, 0.2)",
                                                     foregroundColor:"rgba(60, 60, 60, 0.3)"})
     //#endregion

   return (
      <div className='page__movies'>
         <div className="section__slider-now-paying">
               <MoviePreviewSlider items={sliderMedia} 
                                   isLoading={isSliderMediaLoading}
                                   swiperClass={"popular-films-slider"}
                                   swiperSlideClass={"slide-preview-films"}
                                   type={type}
                                   />
         </div>
                <TypeOfMediaFilters filterMedia={filterMedia}
                                    setFilterMedia={setFilterMedia}
                                    mediaPagination={mediaPagination}
                                    setMediaPagination={setMediaPagination}  
                                    type={type} 
                                   />
         <div className="section__media-list media-list">
             <div className="media-list__filters">
                <MediaFilters mediaPagination={mediaPagination}
                              setMediaPagination={setMediaPagination}
                              setMedia={setMedia}
                              setFilterMedia={setFilterMedia}
                              type={type}
                              />
                
             </div>
             <div className="media-list__list">
                  <MediaContainer items={media} 
                                  fakeItems={fakeArray}
                                  isItemsLoading={isMediaLoading}
                                  title={filterMedia.name}
                                  type={type}
                                  />
                <div className="media-list__pagination">
                  <PaginationList pagination={mediaPagination} 
                                  setPagination={setMediaPagination}
                                  />
                </div>
             </div>
         </div>
      </div>
   )
}