import React, {FC} from 'react';
import Player from "../../../shared/components/Player/Player";
import SomeFunc from '../../../utils/SomeFunc';
import TailSpinLoader from "../../../shared/components/Loaders/TailSpinLoader";
import {IMovie} from "../../../models/IMovie";
import mediaService from "../../../API/mediaService";

interface moviePageProps {
    movie: IMovie
    isLoadingMovie: boolean
}

const MoviePage: FC<moviePageProps> = ({movie, isLoadingMovie}) => {

    const separator = ", "

    return (
        <div className="media">
            {
                isLoadingMovie ?
                    <TailSpinLoader width={80} height={80}/>
                    :
                    <>
                        <div className="media__info-conteiner">
                            <img src={mediaService.URL_IMAGE+movie?.backdrop_path} className='media__back-drop' alt="back-drop"/>
                            <div className="media__back-drop-filter"></div>
                            <div style={{padding: "20px"}}>
                                <h3 className="media__title">{movie?.title}</h3>
                                <div className='media__info-wrap'>
                                    <div className="media__image _ibg">
                                        <img src={mediaService.URL_IMAGE+movie?.poster_path} alt="poster"/>
                                    </div>
                                    <div className="media__more-about">
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Рейтинг:</div>
                                            <div className="media__section-data">IMDb: {movie?.vote_average+` (${movie?.vote_count})`}</div>
                                        </div>
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Дата выхода:</div>
                                            <div className="media__section-data">{movie?.release_date}</div>
                                        </div>
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Жанр:</div>
                                            <div className="media__section-data">{SomeFunc.getString(movie?.genres, "name", separator)}</div>
                                        </div>
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Страна:</div>
                                            <div className="media__section-data">{SomeFunc.getString(movie?.production_countries, "name", separator)}</div>
                                        </div>
                                        <div className="media__more-about-section">
                                            <div className="media__name-section">Время:</div>
                                            <div className="media__section-data">{movie?.runtime} мин.</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="media__overview">{movie?.overview}</p>
                            </div>
                        </div>
                        <div className="media__content">
                            <Player title={movie?.title}/>
                        </div>
                    </>
            }
        </div>
    )
}

export default MoviePage;