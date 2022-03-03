import * as movieActions from './reducers/movie/movieActions'
import * as searchActions from './reducers/search/searchActions'



export const rootActions = {
    ...movieActions,
    ...searchActions
}