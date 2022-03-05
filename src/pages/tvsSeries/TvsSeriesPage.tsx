import React from 'react'
import '../../styles/sass/style.scss'
import './TvsSeriesPage.scss'
import MediaPreviewSlider from "../../shared/components/Sliders/MediaPreviewSlider";
import {IMedia, mediaTypes} from "../../models/IMedia";
import {useAction} from "../../hooks/useAction";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import MediaContainer from "../../shared/components/MediaContainer/MediaContainer";
import {
    FilterMovie, FilterTvSeries,
    ITypeOfFilterMovie, ITypeOfFilterTvSeries,
    typesOfFilterMovie,
    typesOfFilterTvSeries
} from "../../shared/components/filters/typesOfFilteres";
import TypeOfMediaFilters from "../../shared/components/filters/TypeOfMediaFilters/TypeOfMediaFilters";
import MoreMediaFilters from "../../shared/components/filters/MoreMediaFilters/MoreMediaFilters";
import PaginationList from "../../shared/components/Pagination/PaginationList";


export default function TvsSeriesPage() {
    const [pagination, setPagination] = React.useState({currentPage: 1, totalPages: 1})
    const [filterTypeMedia, setFilterTypeMedia] = React.useState<ITypeOfFilterTvSeries>(typesOfFilterTvSeries[1])

    const {fetchPopularMedia, fetchTopRatedMedia, fetchTrendingMediaSlider, fetchAiringTodayTvSeries, fetchOnTheAirTvSeries} = useAction()
    const {media, isLoading, total_pages} = useTypeSelector(i => i.media)
    const {sliderMedia, isSliderMediaLoading, sliderMediaError} = useTypeSelector(i => i.sliderMedia)

    React.useEffect(() => {
        fetchTrendingMediaSlider(1, mediaTypes.TV_SERIES)
    },[])

    React.useEffect(() => {
        setPagination({...pagination, totalPages: total_pages})
    },[total_pages])

    React.useEffect(() => {
        switch (filterTypeMedia.type) {
            case FilterTvSeries.POPULAR:
                fetchPopularMedia(pagination.currentPage, mediaTypes.TV_SERIES)
                break;
            case FilterTvSeries.TOP_RATED:
                fetchTopRatedMedia(pagination.currentPage, mediaTypes.TV_SERIES)
                break;
            case FilterTvSeries.ON_THE_AIR:
                fetchOnTheAirTvSeries(pagination.currentPage)
                break;
            case FilterTvSeries.AIRING_TODAY:
                fetchAiringTodayTvSeries(pagination.currentPage)
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
            <TypeOfMediaFilters typesOfMedia={typesOfFilterTvSeries}
                                filterTypeMedia={filterTypeMedia}
                                setFilterTypeMedia={setFilterTypeMedia}
                                mediaPagination={pagination}
                                setMediaPagination={setPagination}/>

            <div className="section__media-list media-list">
                {
                    filterTypeMedia === typesOfFilterTvSeries[0]
                                        && <div className="media-list__filters">
                                            <MoreMediaFilters type={mediaTypes.TV_SERIES}
                                                              filterTypeMedia={filterTypeMedia}
                                                              mediaPagination={pagination}
                                                              setMediaPagination={setPagination}
                                                              typesOfFilterMedia={typesOfFilterTvSeries}/>
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