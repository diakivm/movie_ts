import React, {FC} from 'react';
import {IMovie} from "../../../models/IMovie";
import {ITvSeries} from "../../../models/ITvSeries";
import TailSpinLoader from "../../../shared/components/Loaders/TailSpinLoader";
import SomeFunc from '../../../utils/SomeFunc';
import Player from "../../../shared/components/Player/Player";
import mediaService from "../../../API/mediaService";
import Button from "../../../shared/UI/Button/Button";
import MediaTrailerInfo from "../../../shared/components/MediaTrailerInfo/MediaTrailerInfo";
import {IMedia, mediaTypes} from "../../../models/IMedia";

interface TvSeriesPageProps {
    tv_series: ITvSeries
    isLoadingTvSeries: boolean
}

const TvSeriesPage: FC<TvSeriesPageProps> = ({tv_series ,isLoadingTvSeries}) => {

    const separator = ", "

    const [modalShow, setModalShow] = React.useState(false)

    function onClickVideo() {
        setModalShow(true)
    }

    return (
        <div className="media">
            {
                isLoadingTvSeries ?
                    <TailSpinLoader width={80} height={80}/>
                    :
                    <>
                        <div className="media__info-conteiner">
                            <img src={mediaService.URL_IMAGE+tv_series?.backdrop_path} className='media__back-drop' alt="back-drop"/>
                            <div className="media__back-drop-filter"></div>
                            <div style={{padding: "20px"}}>
                                <h3 className="media__title">{tv_series?.name}</h3>
                                <div className='media__info-wrap'>
                                    <div className="media__image-wrap">
                                        <div className="media__image _ibg">
                                            <img src={mediaService.URL_IMAGE+tv_series?.poster_path} alt="poster"/>
                                        </div>
                                        <Button onClick={onClickVideo}
                                                className={"media__trailer-btn"}>Трейлер</Button>
                                        {
                                            modalShow && <MediaTrailerInfo item={{...tv_series, type: mediaTypes.TV_SERIES} as IMedia}
                                                                           modalShow={modalShow}
                                                                           setModalShow={setModalShow}/>
                                        }
                                    </div>
                                    <div className="media__more-about">
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Рейтинг:</div>
                                            <div className="media__section-data">IMDb: {tv_series?.vote_average+` (${tv_series?.vote_count})`}</div>
                                        </div>
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Дата выхода:</div>
                                            <div className="media__section-data">{tv_series?.first_air_date}</div>
                                        </div>
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Жанр:</div>
                                            <div className="media__section-data">{SomeFunc.getString(tv_series?.genres, "name", separator)}</div>
                                        </div>
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Страна:</div>
                                            <div className="media__section-data">{SomeFunc.getString(tv_series?.production_countries, "name", separator)}</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="media__overview">{tv_series?.overview}</p>
                            </div>
                        </div>
                        <div className="media__content">
                            <Player title={tv_series?.name}/>
                        </div>
                    </>
            }
        </div>
    );
};

export default TvSeriesPage;