import React, {FC} from 'react';
import { Accordion} from 'react-bootstrap';
import './MediaFilters.scss'
import useFetching from "../../../../hooks/useFetching";
import mediaService from "../../../../API/mediaService";
import Button from "../../../UI/Button/Button";
import SliderRange from "../../Sliders/SliderRange";
import SliderSimple from "../../Sliders/SliderSimple";
import {IGenre} from "../../../../models/IGenre";
import {mediaType} from "../../../../models/IMedia";
import {useAction} from "../../../../hooks/useAction";
import {typeOfFilterMedia, typesOfFilterMovie} from "../typesOfFilteres";

interface MoreMediaFiltersProps {
    type: mediaType
    filterTypeMedia: typeOfFilterMedia
    mediaPagination: {currentPage: number, totalPages: number}
    setMediaPagination: (item: any) => void
    typesOfFilterMedia: typeOfFilterMedia[]
}

const MoreMediaFilters: FC<MoreMediaFiltersProps> = ({ type,
                                                       mediaPagination,
                                                       setMediaPagination,
                                                       filterTypeMedia,
                                                       typesOfFilterMedia,}) => {

    const [selectedGenres, setSelectedGenres] = React.useState<IGenre[]>([])
    const [yearFilter, setYearFilter] = React.useState<[number, number]>([2000, 2023])
    const [raitingFilter, setRaitingFilter] = React.useState<[number, number]>([0, 10])
    const [voteFilter, setVoteFilter] = React.useState<number>(0)

    const {fetchDiscoverMedia} = useAction()

    const [genres, setGenres] = React.useState<IGenre[]>([])
    const [fetchGenres, isGenresLoading, errorGenresValue] = useFetching( async() => {
       const response = await mediaService.getMediaGenres(type)
       setGenres(response.data.genres)
    })


    React.useEffect(() => {
        fetchGenres()
    },[])

    React.useEffect(() => {
        if(filterTypeMedia === typesOfFilterMedia[0])
            fetchDiscoverMedia(mediaPagination.currentPage, selectedGenres, voteFilter, raitingFilter, yearFilter, type)

    },[mediaPagination.currentPage])

  function executeFiltering(){
        setMediaPagination({...mediaPagination, currentPage: 1})
        fetchDiscoverMedia(mediaPagination.currentPage, selectedGenres, voteFilter, raitingFilter, yearFilter, type)
  }

  function resetFiltering(){
     setYearFilter([2000, 2023])
     setRaitingFilter([0, 10])
     setVoteFilter(0)
     setSelectedGenres([])
  }

  function onToggleGenre(genre: IGenre){

      if(selectedGenres.find(item => item.id === genre.id)){
         setSelectedGenres(selectedGenres.filter(item => item.id !== genre.id))
         } else {
           setSelectedGenres([...selectedGenres, genre])
         }
  }

  return (

      <div className="select-section__filtres filtres">
         <div className="filtres__genre-items">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Жанри</Accordion.Header>
                   <Accordion.Body>               
                      {
                        genres.map((item, index) => {
                          return <Button key={index}
                                        onClick={() => onToggleGenre(item)}
                                        className={selectedGenres.find(sel => sel.id === item.id) ? "filtres__genre-item active" : "filtres__genre-item"}
                                          >
                                          {item.name}</Button>
                        })
                      }
                 </Accordion.Body>
               </Accordion.Item>
            </Accordion>
         </div>
         <div className="filtres__year">
              <div className="filtres__year-value">{`Год от ${yearFilter[0]} до ${yearFilter[1]}`}</div>
              <SliderRange value={yearFilter}
                            setValue={setYearFilter}
                            min={1950}
                            max={2023}/>
         </div>
         <div className="filtres__raiting">
              <div className="filtres__raiting-value">{`Рейтинг от ${raitingFilter[0]} до ${raitingFilter[1]}`}</div>
              <SliderRange  value={raitingFilter}
                            setValue={setRaitingFilter}
                            min={0}
                            max={10}/>
         </div>
         <div className="filtres__vote">
              <div className="filtres__vote-value">{`Количество голосов от ${voteFilter}`}</div>
              <SliderSimple value={voteFilter}
                            setValue={setVoteFilter}
                            step={50}
                            min={0}
                            max={2000}/>
         </div>
             <Button style={{marginRight:'5px', marginBottom:'10px'}} onClick={() => executeFiltering()}>Поиск</Button>
             <Button onClick={() => resetFiltering()}>Стереть фильтрацию</Button>
      </div>
  )
}

export default MoreMediaFilters