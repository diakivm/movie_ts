import React from 'react'
import '../../styles/sass/style.scss'
import './MoviesPage.scss'
import MediaPreviewSlider from "../../shared/components/Sliders/MediaPreviewSlider";
import {IMedia, mediaTypes} from "../../models/IMedia";
import {useAction} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import MediaContainer from "../../shared/components/MediaContainer/MediaContainer";
import PaginationList from "../../shared/components/Pagination/PaginationList";
import {FilterMovie, ITypeOfFilterMovie, typesOfFilterMovie} from "../../shared/components/filters/typesOfFilteres";
import TypeOfMediaFilters from "../../shared/components/filters/TypeOfMediaFilters/TypeOfMediaFilters";
import MoreMediaFilters from "../../shared/components/filters/MoreMediaFilters/MoreMediaFilters";


export default function MoviesPage() {

    const [pagination, setPagination] = React.useState({currentPage: 1, totalPages: 1})
    const [filterTypeMedia, setFilterTypeMedia] = React.useState<ITypeOfFilterMovie>(typesOfFilterMovie[1])

    const {fetchPopularMedia, fetchTopRatedMedia, fetchTrendingMediaSlider, fetchUpcomingMovie, fetchNowPlayingMovie} = useAction()
    const {media, isLoading, total_pages} = useTypeSelector(i => i.media)
    const {sliderMedia, isSliderMediaLoading, sliderMediaError} = useTypeSelector(i => i.sliderMedia)

    React.useEffect(() => {
        fetchTrendingMediaSlider(1, mediaTypes.MOVIE)
    },[])

    React.useEffect(() => {
        setPagination({...pagination, totalPages: total_pages})
    },[total_pages])

    React.useEffect(() => {
        switch (filterTypeMedia.type) {
            case FilterMovie.POPULAR:
                fetchPopularMedia(pagination.currentPage, mediaTypes.MOVIE)
                break;
            case FilterMovie.UPCOMING:
                fetchUpcomingMovie(pagination.currentPage)
                break;
            case FilterMovie.NOW_PlAYING:
                fetchNowPlayingMovie(pagination.currentPage)
                break;
            case FilterMovie.TOP_RATED:
                fetchTopRatedMedia(pagination.currentPage, mediaTypes.MOVIE)
                break;
            default:
                break;
        }
    },[filterTypeMedia, pagination.currentPage])


   return (

      <div className='page__movies'>
         <div className="section__slider-now-paying">
             <MediaPreviewSlider items={sliderMedia as IMedia[]}
                                 isLoading={isSliderMediaLoading}/>
         </div>
          <TypeOfMediaFilters typesOfMedia={typesOfFilterMovie}
                              filterTypeMedia={filterTypeMedia}
                              setFilterTypeMedia={setFilterTypeMedia}
                              mediaPagination={pagination}
                              setMediaPagination={setPagination}/>

         <div className="section__media-list media-list">
                 {
                         filterTypeMedia === typesOfFilterMovie[0]
                                    && <div className="media-list__filters">
                                             <MoreMediaFilters type={mediaTypes.MOVIE}
                                                               filterTypeMedia={filterTypeMedia}
                                                               mediaPagination={pagination}
                                                               setMediaPagination={setPagination}
                                                               typesOfFilterMedia={typesOfFilterMovie}/>
                                       </div>
                 }
             <div className="media-list__list">
                 <MediaContainer items={media}
                                 isItemsLoading={isLoading}/>
                <div className="media-list__pagination">
                    <PaginationList pagination={pagination}
                                    setPagination={setPagination}/>
                </div>
             </div>
         </div>
      </div>

   )
}