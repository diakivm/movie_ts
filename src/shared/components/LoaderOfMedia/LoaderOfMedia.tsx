import React, {FC} from 'react';
import {IMedia, mediaTypes} from "../../../models/IMedia";
import MediaContainer from "../MediaContainer/MediaContainer";
import Button from "../../UI/Button/Button";
import TailSpinLoader from "../Loaders/TailSpinLoader";

interface LoaderOfMediaProps {
    items: IMedia[]
    title: string
    isLoadingMedia: boolean
    onClickButton: () => void
}

const LoaderOfMedia: FC<LoaderOfMediaProps> = ({items, title, isLoadingMedia, onClickButton}) => {
    return (
        <>
            <MediaContainer items={items}
                            title={title}/>

            {
                 isLoadingMedia  ?
                                <TailSpinLoader width={80} height={80}/>
                                :
                                <div className="main-button_container">
                                    <Button onClick={onClickButton}>Загрузить еще</Button>
                                </div>
            }

        </>
    );
};

export default LoaderOfMedia;