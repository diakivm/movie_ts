import React, {FC} from 'react';
import Button from "../../../UI/Button/Button";

interface TypeOfMediaFilters {

}

const TypeOfMediaFilters: FC<TypeOfMediaFilters> = () => {


    function onClickButton(type: any){
        let item = typeOfMedia.find(item => item.type === type)

        setFilterMedia(item)
        setMediaPagination({...mediaPagination, currentPage: 1})
    }

    return (
        <div className="select-section__type-media">
            <div className="type-media__items">
                {
                    typeOfMedia.map((item) => {
                        return item.mediaType.find(item => item === type) &&
                            <Button key={item.id}
                                    onClick={() => onClickButton(item.type)}
                                    className={item.type == filterMedia.type ? "type-media__item active" : "type-media__item"}
                            >{item.name}</Button>

                    })
                }
            </div>
        </div>
    )
};

export default TypeOfMediaFilters;