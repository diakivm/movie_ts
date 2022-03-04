import React, {FC} from 'react';
import Button from "../../../UI/Button/Button";
import {typeOfFilterMedia} from "../typesOfFilteres";
import './TypeOfMediaFilters.scss'

interface TypeOfMediaFilters {
    typesOfMedia: typeOfFilterMedia[]
    filterTypeMedia: typeOfFilterMedia
    setFilterTypeMedia: (item: any) => void
    mediaPagination: {currentPage: number, totalPages: number}
    setMediaPagination: (item: any) => void
}

const TypeOfMediaFilters: FC<TypeOfMediaFilters> = ({typesOfMedia,
                                                     filterTypeMedia,
                                                     setFilterTypeMedia,
                                                     mediaPagination,
                                                     setMediaPagination}) => {


    function onClickButton(type: any){
        let item = typesOfMedia.find(item => item.type === type)

        setFilterTypeMedia(item)
        setMediaPagination({...mediaPagination, currentPage: 1})
    }

    return (
        <div className="select-section__type-media">
            <div className="type-media__items">
                {
                    typesOfMedia.map((item) => {
                        return  <Button key={item.type}
                                        onClick={() => onClickButton(item.type)}
                                        className={item.type == filterTypeMedia.type ? "type-media__item active" : "type-media__item"}
                                >{item.name}</Button>

                    })
                }
            </div>
        </div>
    )
};

export default TypeOfMediaFilters;