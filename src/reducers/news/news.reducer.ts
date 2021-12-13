import { NewsActionTypes } from "./news.actions"
import { NewsState, NewsAction } from "../../types/news"

const initialState: NewsState = {
    news: [],
    isFetching: false,
    error: null
}

const newsReducer = (state = initialState, action: NewsAction): NewsState => {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS_START :
            return {
                ...state,
                isFetching: true
            }
        case NewsActionTypes.FETCH_NEWS_SUCCESS :
            return {
                ...state,
                isFetching: false,
                news: action.payload
            }
        case NewsActionTypes.FETCH_NEWS_ERROR :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default :
            return state
    }
}

export default newsReducer