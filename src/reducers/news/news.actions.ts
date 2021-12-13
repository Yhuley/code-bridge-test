import { INews } from "../../types/news"

export enum NewsActionTypes {
    FETCH_NEWS_START = "FETCH_NEWS_START",
    FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
    FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR"
}

export const fetchNewsStart = () => ({ type: NewsActionTypes.FETCH_NEWS_START })
export const fetchNewsSuccess = (news: INews[]) => ({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: news })
export const fetchNewsError = (error: string | null) => ({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: error })