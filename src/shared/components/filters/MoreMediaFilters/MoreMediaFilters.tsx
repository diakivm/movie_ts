import React, {FC} from 'react';
import { Accordion} from 'react-bootstrap';
import './MediaFilters.scss'
import useFetching from "../../../../hooks/useFetching";
import mediaService from "../../../../API/mediaService";
import Button from "../../../UI/Button/Button";

interface MoreMediaFiltersProps {
    mediaPagination: any
    setMediaPagination: any
    setFilterMedia: any
    setMedia: any
    type: any
}

const MoreMediaFilters: FC<MoreMediaFiltersProps> = ({mediaPagination, setMediaPagination, setMedia, type, setFilterMedia}) => {

    const [selectedGenres, setSelectedGenres] = React.useState([])
    const [yearFilter, setYearFilter] = React.useState<[number, number]>([2000, 2023])
    const [raitingFilter, setRaitingFilter] = React.useState<[number, number]>([0, 10])
    const [voteFilter, setVoteFilter] = React.useState<number>(0)


    const [genres, setGenres] = React.useState([])
    const [fetchGenres, isGenresLoading, errorGenresValue] = useFetching( async() => {
       const response = await mediaService.getMediaGenres(type)
       setGenres(response.data.genres)
    })

    const [fetchFilteredMedia, isFilteredMediaLoading, errorFilteredMediaValue] = useFetching( async() => {
       const genres = selectedGenres.map(item => item.id).join(',')
       const response = await mediaService.getDiscoverMedia(mediaPagination.currentPage, genres, voteFilter, raitingFilter, yearFilter, type)

       setMediaPagination({...mediaPagination, totalPages: response.data.total_pages})
       setMedia(response.data.results)
    })



    React.useEffect(() => {
      fetchGenres()
    },[type])

    React.useEffect(() => {
      fetchFilteredMedia()
    },[mediaPagination.currentPage])


  function executeFiltering(){

    if(mediaPagination.currentPage === 1){
        fetchFilteredMedia()
        } else {
          setMediaPagination({...mediaPagination, currentPage: 1})
        }

    if(selectedGenres.length !== 0 || yearFilter !== [2000, 2023] || raitingFilter !== [0, 10] || voteFilter !== 0){
        setFilterMedia({name: "Результат...", type: "filtered"})
        } else {
          setFilterMedia({name: "Популярные", type: "popular"})
        }
  }

  function resetFiltering(){
     setYearFilter([2000, 2023])
     setRaitingFilter([0, 10])
     setVoteFilter(0)
     setSelectedGenres([])

     setFilterMedia({name: "Популярные", type: "popular"})
  }

  function onToggleGenre(genre: any){

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
                <Accordion.Item eventKey="0">
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
              <div className="filtres__year-value">{`Год от ${yearFilter[0,0]} до ${yearFilter[0,1]}`}</div>
              <SliderRange value={yearFilter}
                            setValue={setYearFilter}
                            min={1950}
                            max={2023}/>
         </div>
         <div className="filtres__raiting">
              <div className="filtres__raiting-value">{`Рейтинг от ${raitingFilter[0,0]} до ${raitingFilter[0,1]}`}</div>
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