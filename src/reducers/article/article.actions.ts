import { IArticle } from "../../types/article";

export enum ArticleActionTypes {
    FETCH_ARTICLE_START = "FETCH_ARTICLE_START",
    FETCH_ARTICLE_SUCEES = "FETCH_ARTICLE_SUCEES",
    FETCH_ARTICLE_ERROR = "FETCH_ARTICLE_ERROR"
}

export const fetchArticleStart = (id: any) => ({ type: ArticleActionTypes.FETCH_ARTICLE_START, payload: id })
export const fetchArticleSuccess = (article: IArticle) => ({ type: ArticleActionTypes.FETCH_ARTICLE_SUCEES, payload: article })
export const fetchArticleError = (error: string | null) => ({ type: ArticleActionTypes.FETCH_ARTICLE_ERROR, payload: error })
