import React, {FC} from 'react';
import TailSpinLoader from "../Loaders/TailSpinLoader";
import VideoModal from "../Modal/VideoModal";
import {ITrailerInfo} from "../../../models/ITrailerInfo";
import useFetching from "../../../hooks/useFetching";
import mediaService from "../../../API/mediaService";
import {IMedia, mediaType, mediaTypes} from "../../../models/IMedia";
import Dalay from "../../../utils/Dalay";
import {IMovie} from "../../../models/IMovie";
import {ITvSeries} from "../../../models/ITvSeries";


interface MediaTrailerInfoProps {
    item: IMedia
    modalShow: boolean
    setModalShow: any
}

const MediaTrailerInfo: FC<MediaTrailerInfoProps> = ({item, modalShow, setModalShow}) => {

    const [videoKeys, setVideoKeys] = React.useState<ITrailerInfo[]>([])
    const [fetchVideoKeys, isLoading, errorVideovalue] = useFetching( async () => {
        const response = await mediaService.getMediaTrailer(item.id, item.type)
        await Dalay.wait(1)
        setVideoKeys(response.data.results)
    })

    React.useEffect(() => {
        fetchVideoKeys()
    },[])

    return (
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
    );
};

export default MediaTrailerInfo;