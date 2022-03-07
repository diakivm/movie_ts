import React, {FC} from 'react';
import {IMovie} from "../../../../models/IMovie";
import mediaService from "../../../../API/mediaService";
import {useNavigate} from "react-router-dom";
import VideoModal from "../../Modal/VideoModal";
import TailSpinLoader from "../../Loaders/TailSpinLoader";
import {IMedia, mediaTypes} from "../../../../models/IMedia";
import useFetching from "../../../../hooks/useFetching";
import Dalay from "../../../../utils/Dalay";
import {ITrailerInfo} from "../../../../models/ITrailerInfo";
import MediaTrailerInfo from "../../MediaTrailerInfo/MediaTrailerInfo";


interface MoviePreviewProps {
    item: IMovie
}

const MoviePreview: FC<MoviePreviewProps> = ({item}) => {

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
                <h4 className="preview__title" onClick={openMediaPage}>{item.title}</h4>
                <div className="preview__about">
                    <div className="preview__year">{item?.release_date?.split('-')[0]}</div>
                    <div className="preview__vote">{item?.vote_average}</div>
                </div>
            </div>
        </div>
    );
};

export default MoviePreview;