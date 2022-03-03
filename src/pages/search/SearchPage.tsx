import React from 'react';
import Loaders from '../../utils/Loaders'
import MediaContainer from '../../shared/components/MediaContainer/MediaContainer'
import TailSpinLoader from '../../shared/components/Loaders/TailSpinLoader'

import './SearchPage.scss'
import {useParams} from "react-router-dom";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {IMediaType} from "../../models/IMedia";

type SearchParams = {
    searchQuery: string
}

export default function SearchPage() {

    const params = useParams<SearchParams>()
    const {movies, tv_series, error, isLoading} = useTypeSelector(i => i.search)
    const {doSearch} = useAction()

    React.useEffect(() => {
        doSearch(params.searchQuery)
    },[params])


   return (
        <div className="search-page">
          <div className="search-page__items">
             <h2 className="search-page__title">{`Результаты поиска <<${params.searchQuery}>>`}</h2>
             {
                          isLoading ?
                                    <TailSpinLoader width={80} height={80}/>
                                    :
                                    (
                                       movies.length + tv_series.length == 0
                                                            ? 
                                                            <p className="search-page__masegge-no-items">Ваш поиск не дал результатов</p>
                                                            :
                                                            <MediaContainer items={[...tv_series, ...movies] as IMediaType[]} />
                                    )
             }
          </div>
      </div>
   )
}
