import React from 'react';
import Button from '../../../shared/UI/Button/Button'
import './TypeOfMediaFilters.scss'


export default function TypeOfMediaFilters({filterMedia, setFilterMedia, mediaPagination, setMediaPagination, type}) {

  const typeOfMedia = [{id: 1, name:"Популярные", type: "popular", mediaType: ['movie', 'tv']},
                       {id: 2, name:"В ожидании", type: "upcoming", mediaType: ['movie']},
                       {id: 3, name:"Сейчас смотрят", type: "now-palying", mediaType: ['movie']},
                       {id: 4, name:"Лутшие", type: "top-rated", mediaType: ['movie', 'tv']},
                       {id: 5, name:"В ефире сегодня", type: "airing-today", mediaType: ['tv']},
                       {id: 6, name:"По телевидению", type: "on-the-air", mediaType: ['tv']}]
         
    function onClickButton(type){
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
}
