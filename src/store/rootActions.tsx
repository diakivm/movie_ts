import * as mediaActions from './reducers/media/mediaActions'
import * as searchActions from './reducers/search/searchActions'
import * as sliderMediaActions from './reducers/sliderMedia/sliderMediaActions'



export const rootActions = {
    ...mediaActions,
    ...searchActions,
    ...sliderMediaActions
}