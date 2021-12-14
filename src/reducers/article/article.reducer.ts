import { ArticleActionTypes } from "./article.actions";
import { ArticleState, ArticleAction } from "../../types/article";

const initialState: ArticleState = {
    id: "",
    article: null,
    isFetching: false,
    error: null
}

const articleReducer = (state = initialState, action: ArticleAction): ArticleState => {
    switch (action.type) {
        case ArticleActionTypes.FETCH_ARTICLE_START :
            return {
                ...state,
                isFetching: true,
                id: action.payload
            }
        case ArticleActionTypes.FETCH_ARTICLE_SUCEES :
            return {
                ...state,
                article: action.payload,
                isFetching: false
            }
        case ArticleActionTypes.FETCH_ARTICLE_ERROR :
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default articleReducer