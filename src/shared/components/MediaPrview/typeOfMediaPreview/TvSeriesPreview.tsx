import React, {FC} from 'react';
import mediaService from "../../../../API/mediaService";
import {useNavigate} from "react-router-dom";
import VideoModal from "../../Modal/VideoModal";
import TailSpinLoader from "../../Loaders/TailSpinLoader";
import {useTypeSelector} from "../../../../hooks/useTypeSelector";
import {useAction} from "../../../../hooks/useAction";
import {ITvSeries} from "../../../../models/ITvSeries";
import {ITrailerInfo} from "../../../../models/ITrailerInfo";
import useFetching from "../../../../hooks/useFetching";
import {mediaTypes} from "../../../../models/IMedia";
import Dalay from "../../../../utils/Dalay";


interface TvSeriesPreviewProps {
    item: ITvSeries
}

const TvSeriesPreview: FC<TvSeriesPreviewProps> = ({item}) => {

    const poster_path: string = mediaService.URL_IMAGE+item?.poster_path

    const [modalShow, setModalShow] = React.useState(false)

    const [videoKeys, setVideoKeys] = React.useState<ITrailerInfo[]>([])
    const [fetchVideoKeys, isLoading, errorVideovalue] = useFetching( async () => {
        const response = await mediaService.getMediaTrailer(item.id, mediaTypes.TV_SERIES)
        await Dalay.wait(1)
        setVideoKeys(response.data.results)
    })

    function onClickVideo() {
        setModalShow(true)
        fetchVideoKeys()
    }

    const navigate = useNavigate()
    function openMediaPage(){
        navigate(`/media/${item.type}/${item.id}`)
    }

    return (
        <div className='preview__container'>
            <div className="preview__img _ibg">
                <img src={poster_path} alt="img"/>
                <div className="_icon-play img-play" onClick={openMediaPage}></div>
                <div className="_icon-dots img-more" onClick={onClickVideo}></div>
            </div>
            <VideoModal show={modalShow}
                        onHide={() => setModalShow(false)}
            >
                {
                    isLoading ?
                        <TailSpinLoader width={80} height={80}/>
                        :
                        <>
                            <iframe className='trailer'
                                    src={`https://www.youtube.com/embed/${videoKeys[0]?.key}`}
                                    allowFullScreen>
                            </iframe>
                            <hr />
                            <p>{item?.overview}</p>
                        </>
                }
            </VideoModal>
            <div className="preview__info">
                <h4 className="preview__title" onClick={openMediaPage}>{item.name}</h4>
                <div className="preview__about">
                    <div className="preview__year">{item?.first_air_date?.split('-')[0]}</div>
                    <div className="preview__vote">{item?.vote_average}</div>
                </div>
            </div>
        </div>
    );
};

export default TvSeriesPreview;