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
import {IMedia, mediaTypes} from "../../../../models/IMedia";
import Dalay from "../../../../utils/Dalay";
import MediaTrailerInfo from "../../MediaTrailerInfo/MediaTrailerInfo";


interface TvSeriesPreviewProps {
    item: ITvSeries
}

const TvSeriesPreview: FC<TvSeriesPreviewProps> = ({item}) => {

    const [modalShow, setModalShow] = React.useState(false)

    function onClickVideo() {
        setModalShow(true)
    }

    const navigate = useNavigate()
    function openMediaPage(){
        navigate(`/media/${item.type}/${item.id}`)
    }

    return (
        <div className='preview__container'>
            <div className="preview__img _ibg">
                <img src={mediaService.URL_IMAGE+item?.poster_path} alt="img"/>
                <div className="_icon-play img-play" onClick={openMediaPage}></div>
                <div className="_icon-dots img-more" onClick={onClickVideo}></div>
            </div>
            <MediaTrailerInfo item={item as IMedia}
                              modalShow={modalShow}
                              setModalShow={setModalShow}/>
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